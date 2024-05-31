package org.example.kttravel.service.Impl;

import org.example.kttravel.dto.TourDTO;
import org.example.kttravel.exception.CityNotFoundException;
import org.example.kttravel.mapper.TourMapper;
import org.example.kttravel.model.City;
import org.example.kttravel.model.Tour;
import org.example.kttravel.repository.TourRepository;
import org.example.kttravel.service.CityService;
import org.example.kttravel.service.TourServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TourServiceImpl implements TourServices {
    private final TourRepository tourRepository;

    @Autowired
    private CityService cityService;

    public TourServiceImpl(TourRepository tourRepository) {
        this.tourRepository = tourRepository;
    }

    @Override
    public List<Tour> getAllTour() {
        return tourRepository.findAll();
    }

    public Tour addTour(TourDTO tourDTO) {
        Tour tour = TourMapper.mapToTour(tourDTO);
        Optional<City> departureCityOptional = cityService.findByID(tourDTO.getPositionDepartureID());
        Optional<City> destinationCityOptional = cityService.findByID(tourDTO.getPositionDestinationID());

        if (departureCityOptional.isPresent() && destinationCityOptional.isPresent()) {
            City departureCity = departureCityOptional.get();
            City destinationCity = destinationCityOptional.get();

            tour.setPositionDeparture(departureCity);
            tour.setPositionDestination(destinationCity);


            return tourRepository.save(tour);
        } else
            throw new CityNotFoundException("Departure or destination city not found.");
    }

    @Override
    public Optional<Tour> getTourByName(String tourName) {
        return tourRepository.findByName(tourName);
    }
}
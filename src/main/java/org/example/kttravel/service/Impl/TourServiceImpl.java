package org.example.kttravel.service.Impl;

import jakarta.transaction.Transactional;
import org.example.kttravel.dto.TourDTO;
import org.example.kttravel.entity.City;
import org.example.kttravel.entity.Schedule;
import org.example.kttravel.entity.Tour;
import org.example.kttravel.exception.ResourceNotFoundException;
import org.example.kttravel.mapper.ScheduleMapper;
import org.example.kttravel.mapper.TourMapper;
import org.example.kttravel.repository.CityRepository;
import org.example.kttravel.repository.ScheduleRepository;
import org.example.kttravel.repository.TourRepository;
import org.example.kttravel.service.TourService;
import org.hibernate.service.spi.ServiceException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TourServiceImpl implements TourService {

    private final TourRepository tourRepository;

    private final CityRepository cityRepository;

    private final ScheduleRepository scheduleRepository;

    public TourServiceImpl(TourRepository tourRepository, CityRepository cityRepository, ScheduleRepository scheduleRepository) {
        this.tourRepository = tourRepository;
        this.cityRepository = cityRepository;
        this.scheduleRepository = scheduleRepository;
    }

    @Override
    public TourDTO getTourById(int id) {
        Tour tour = tourRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("TourID not found"));
        return TourMapper.INSTANCE.toDTO(tour);
    }

    @Override
    public List<TourDTO> getAllTours() {
        try {
            List<Tour> tours = tourRepository.findAll();
            return tours.stream()
                    .map(TourMapper.INSTANCE::toDTO)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new RuntimeException("Failed to retrieve tours", e);
        }
    }

    @Override
    @Transactional
    public TourDTO addTour(TourDTO tourDTO) {
        try {
            Tour tour = TourMapper.INSTANCE.toEntity(tourDTO);
            City departureCity = cityRepository.findById(tourDTO.getPositionDepartureID())
                    .orElseThrow(() -> new ResourceNotFoundException("Departure city not found"));
            City destinationCity = cityRepository.findById(tourDTO.getPositionDestinationID())
                    .orElseThrow(() -> new ResourceNotFoundException("Destination city not found"));

            tour.setPositionDeparture(departureCity);
            tour.setPositionDestination(destinationCity);
            List<Schedule> schedules = tourDTO.getSchedules().stream()
                    .map(ScheduleMapper.INSTANCE::toEntity)
                    .peek(schedule -> schedule.setTour(tour))
                    .collect(Collectors.toList());
            tour.setSchedules(schedules);
            Tour savedTour = tourRepository.save(tour);
            return TourMapper.INSTANCE.toDTO(savedTour);
        } catch (ResourceNotFoundException e) {
            throw new ServiceException("Failed to add tour: " + e.getMessage(), e);
        } catch (Exception e) {
            throw new ServiceException("An unexpected error occurred while adding the tour.", e);
        }
    }

    @Override
    @Transactional
    public TourDTO updateTour(int id, TourDTO tourDTO) {
        Tour existingTour = tourRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tour not found"));
        try{
            existingTour.setName(tourDTO.getName());
            existingTour.setDescription(tourDTO.getDescription());
            existingTour.setDepartureDate(tourDTO.getDepartureDate());
            existingTour.setDestinationDate(tourDTO.getDestinationDate());
            City departureCity = cityRepository.findById(tourDTO.getPositionDepartureID())
                    .orElseThrow(() -> new RuntimeException("Departure city not found"));
            City destinationCity = cityRepository.findById(tourDTO.getPositionDestinationID())
                    .orElseThrow(() -> new RuntimeException("Destination city not found"));
            existingTour.setPositionDeparture(departureCity);
            existingTour.setPositionDestination(destinationCity);
            existingTour.setCentralizedTimeInf(tourDTO.getCentralizedTimeInf());
            existingTour.setCentralizedPositionInf(tourDTO.getCentralizedPositionInf());
            existingTour.setMainPrice(tourDTO.getMainPrice());
            existingTour.setAdultPrice(tourDTO.getAdultPrice());
            existingTour.setChildrenPrice(tourDTO.getChildrenPrice());
            existingTour.setToddlerPrice(tourDTO.getToddlerPrice());
            existingTour.setInfantPrice(tourDTO.getInfantPrice());
            existingTour.setHighlights(tourDTO.getHighlights());
            existingTour.setIncluded(tourDTO.getIncluded());
            existingTour.setExcluded(tourDTO.getExcluded());
            scheduleRepository.deleteByTourId(existingTour.getId());
            List<Schedule> newSchedules = tourDTO.getSchedules().stream()
                    .map(scheduleDTO -> {
                        Schedule schedule = ScheduleMapper.INSTANCE.toEntity(scheduleDTO);
                        schedule.setTour(existingTour);  // Liên kết với tour hiện có
                        return schedule;
                    })
                    .collect(Collectors.toList());
            existingTour.setSchedules(newSchedules);
            Tour updatedTour = tourRepository.save(existingTour);
            return TourMapper.INSTANCE.toDTO(updatedTour);
        } catch (ResourceNotFoundException e) {
            throw new ServiceException("Failed to update tour: " + e.getMessage(), e);
        } catch (Exception e) {
            throw new ServiceException("An unexpected error occurred while updating the tour.", e);
        }

    }

    @Override
    public void deleteTour(int id) {
        tourRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tour not found"));
        try{
            tourRepository.deleteById(id);
        } catch (ResourceNotFoundException e) {
            throw new ServiceException("Failed to delete tour: " + e.getMessage(), e);
        } catch (Exception e) {
            throw new ServiceException("An unexpected error occurred while updating the tour.", e);
        }
    }
}

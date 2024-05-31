package org.example.kttravel.mapper;

import org.example.kttravel.dto.TourDTO;
import org.example.kttravel.model.City;
import org.example.kttravel.model.Schedule;
import org.example.kttravel.model.Tour;
import org.example.kttravel.service.CityService;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Optional;

public class TourMapper {
    private static final SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");



    public static Tour mapToTour(TourDTO tourDTO) {
        Tour tour = new Tour();

        try {
            tour.setName(tourDTO.getName());
            tour.setDescription(tourDTO.getDescription());
//            tour.setDepartureDate(dateFormatter.parse(String.valueOf(tourDTO.getDepartureDate())));
//            tour.setDestinationDate(dateFormatter.parse(String.valueOf(tourDTO.getDestinationDate())));
            tour.setDepartureDate(tourDTO.getDepartureDate());
            tour.setDestinationDate(tourDTO.getDestinationDate());
            tour.setCentralizedTimeInf(tourDTO.getCentralizedTimeInf());
            tour.setCentralizedPositionInf(tourDTO.getCentralizedPositionInf());
            List<Schedule> schedules = ScheduleMapper.createSchedulesForTour(tourDTO.getSchedules(), tour);
            tour.setSchedules(schedules);
            tour.setMainPrice(tourDTO.getMainPrice());
            tour.setAdultPrice(tourDTO.getAdultPrice());
            tour.setChildrenPrice(tourDTO.getChildrenPrice());
            tour.setToddlerPrice(tourDTO.getToddlerPrice());
            tour.setInfantPrice(tourDTO.getInfantPrice());
            tour.setHighlight(tourDTO.getHighlight());
            tour.setIncluded(tourDTO.getIncluded());
            tour.setExcluded(tourDTO.getExcluded());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return tour;
    }
}

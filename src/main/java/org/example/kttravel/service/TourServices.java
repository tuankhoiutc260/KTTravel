package org.example.kttravel.service;

import org.example.kttravel.dto.ScheduleDTO;
import org.example.kttravel.dto.TourDTO;
import org.example.kttravel.model.City;
import org.example.kttravel.model.Tour;

import java.util.List;
import java.util.Optional;

public interface TourServices {
    List<Tour> getAllTour();

    Tour addTour(TourDTO tourDTO);

    Optional<Tour> getTourByName(String tourName);
}

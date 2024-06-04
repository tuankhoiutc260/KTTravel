package org.example.kttravel.service;

import org.example.kttravel.dto.TourDTO;

import java.util.List;

public interface TourService {
    TourDTO getTourById(int id);
    List<TourDTO> getAllTours();
    TourDTO addTour(TourDTO tourDTO);
    TourDTO updateTour(int id, TourDTO tourDTO);
    void deleteTour(int id);
}
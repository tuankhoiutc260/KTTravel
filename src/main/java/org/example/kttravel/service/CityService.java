package org.example.kttravel.service;

import org.example.kttravel.dto.CityDTO;

import java.util.List;

public interface CityService {
    CityDTO getCityById(int id);
    List<CityDTO> getAllCity();
    CityDTO addCity(CityDTO cityDTO);
    CityDTO updateCity(int id, CityDTO cityDTO);
    void deleteCity(int id);
}
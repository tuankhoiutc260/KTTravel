package org.example.kttravel.service;

import org.example.kttravel.dto.CityDTO;
import org.example.kttravel.entity.City;

import java.util.List;
import java.util.Optional;

public interface CityService {
    CityDTO getCityById(int id);
    CityDTO saveCity(CityDTO cityDTO);
    void deleteCity(int id);
}
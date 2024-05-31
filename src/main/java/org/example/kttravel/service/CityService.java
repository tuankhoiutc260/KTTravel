package org.example.kttravel.service;

import org.example.kttravel.model.City;

import java.util.List;
import java.util.Optional;

public interface CityService {
    List<City> getAllCity();
//    Optional<City> findByID(int id);

    Optional<City> findByID(int id);
}

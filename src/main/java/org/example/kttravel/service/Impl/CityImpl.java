package org.example.kttravel.service.Impl;

import org.example.kttravel.model.City;
import org.example.kttravel.repository.CityRepository;
import org.example.kttravel.service.CityServices;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityImpl implements CityServices {
    private final CityRepository cityRepository;

    public CityImpl(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @Override
    public List<City> getAllCity() {
        return cityRepository.findAll();
    }
}

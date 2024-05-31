package org.example.kttravel.service.Impl;

import org.example.kttravel.model.City;
import org.example.kttravel.repository.CityRepository;
import org.example.kttravel.service.CityService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityServiceImpl implements CityService {
    private final CityRepository cityRepository;

    public CityServiceImpl(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @Override
    public List<City> getAllCity() {
        return cityRepository.findAll();
    }

    @Override
    public Optional<City> findByID(int id) {
        return cityRepository.findById(id);

    }

//    @Override
//    public Optional<City> findByID(int id) {
//        return cityRepository.findById(id);
//    }
}

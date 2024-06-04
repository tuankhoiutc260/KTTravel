package org.example.kttravel.service.Impl;

import org.example.kttravel.dto.CityDTO;
import org.example.kttravel.entity.City;
import org.example.kttravel.mapper.CityMapper;
import org.example.kttravel.repository.CityRepository;
import org.example.kttravel.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityServiceImpl implements CityService {

    @Autowired
    private CityRepository cityRepository;

    @Override
    public CityDTO getCityById(int id) {
        City city = cityRepository.findById(id).orElseThrow(() -> new RuntimeException("City not found"));
        return CityMapper.INSTANCE.toDTO(city);
    }

    @Override
    public CityDTO saveCity(CityDTO cityDTO) {
        City city = CityMapper.INSTANCE.toEntity(cityDTO);
        City savedCity = cityRepository.save(city);
        return CityMapper.INSTANCE.toDTO(savedCity);
    }

    @Override
    public void deleteCity(int id) {
        cityRepository.deleteById(id);
    }
}
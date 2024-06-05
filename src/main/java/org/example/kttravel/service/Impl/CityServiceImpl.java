package org.example.kttravel.service.Impl;

import org.example.kttravel.dto.CityDTO;
import org.example.kttravel.entity.City;
import org.example.kttravel.exception.ResourceAlreadyExistsException;
import org.example.kttravel.exception.ResourceNotFoundException;
import org.example.kttravel.mapper.CityMapper;
import org.example.kttravel.repository.CityRepository;
import org.example.kttravel.service.CityService;
import org.hibernate.service.spi.ServiceException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CityServiceImpl implements CityService {
    private final CityRepository cityRepository;

    public CityServiceImpl(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @Override
    public CityDTO getCityById(int id) {
        City city = cityRepository.findById(id).orElseThrow(() -> new RuntimeException("City not found"));
        return CityMapper.INSTANCE.toDTO(city);
    }

    @Override
    public List<CityDTO> getAllCity() {
        try {
            List<City> cityList = cityRepository.findAll();
            return cityList.stream()
                    .map(CityMapper.INSTANCE::toDTO)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new RuntimeException("Failed to retrieve cities", e);
        }
    }

    @Override
    public CityDTO addCity(CityDTO cityDTO) {
        try {
            City newCity = CityMapper.INSTANCE.toEntity(cityDTO);
            City existingCity = cityRepository.findByName(cityDTO.getName());
            if (existingCity != null) {
                throw new ResourceAlreadyExistsException("City already exists");
            }
            newCity.setName(cityDTO.getName());
            newCity.setProvinceName(cityDTO.getProvinceName());
            return CityMapper.INSTANCE.toDTO(cityRepository.save(newCity));
        } catch (RuntimeException e) {
            throw new ServiceException("Failed to add city: " + e.getMessage(), e);
        }
    }

    @Override
    public CityDTO updateCity(int id, CityDTO cityDTO) {
        City exitingCity = cityRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("City not found"));
        try {
            exitingCity.setName(cityDTO.getName());
            exitingCity.setProvinceName(cityDTO.getProvinceName());
            return CityMapper.INSTANCE.toDTO(cityRepository.save(exitingCity));
        } catch (RuntimeException e) {
            throw new ServiceException("Failed to Update City: " + e.getMessage(), e);
        }
    }

    @Override
    public void deleteCity(int id) {
        cityRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("City not found"));
        try {
            cityRepository.deleteById(id);
        } catch (ResourceNotFoundException e) {
            throw new ServiceException("Failed to delete City: " + e.getMessage(), e);
        }
    }
}
package org.example.kttravel.mapper;

import org.example.kttravel.dto.CityDTO;
import org.example.kttravel.model.City;

public class CityMapper {

    public static City mapToCity(CityDTO cityDTO) {
        City city = new City();
        city.setName(cityDTO.getName());
        city.setProvinceName(cityDTO.getProvinceName());
        return city;
    }
}


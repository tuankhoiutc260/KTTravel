package org.example.kttravel.mapper;

import org.example.kttravel.dto.CityDTO;
import org.example.kttravel.entity.City;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CityMapper {
    CityMapper INSTANCE = Mappers.getMapper(CityMapper.class);
    CityDTO toDTO(City city);
    City toEntity(CityDTO cityDTO);
}
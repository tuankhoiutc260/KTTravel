package org.example.kttravel.mapper;

import org.example.kttravel.dto.TourDTO;
import org.example.kttravel.entity.Tour;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface TourMapper {
    TourMapper INSTANCE = Mappers.getMapper(TourMapper.class);

    @Mapping(source = "positionDeparture.id", target = "positionDepartureID")
    @Mapping(source = "positionDestination.id", target = "positionDestinationID")
    TourDTO toDTO(Tour tour);

    @Mapping(source = "positionDepartureID", target = "positionDeparture.id")
    @Mapping(source = "positionDestinationID", target = "positionDestination.id")
    Tour toEntity(TourDTO tourDTO);
}
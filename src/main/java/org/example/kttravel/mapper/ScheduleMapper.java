package org.example.kttravel.mapper;

import org.example.kttravel.dto.ScheduleDTO;
import org.example.kttravel.entity.Schedule;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;


import org.example.kttravel.dto.ScheduleDTO;
import org.example.kttravel.entity.Schedule;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ScheduleMapper {
    ScheduleMapper INSTANCE = Mappers.getMapper(ScheduleMapper.class);

    ScheduleDTO toDTO(Schedule schedule);

    Schedule toEntity(ScheduleDTO scheduleDTO);
}
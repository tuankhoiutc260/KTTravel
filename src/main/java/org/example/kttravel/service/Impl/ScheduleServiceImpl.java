package org.example.kttravel.service.Impl;

import jakarta.transaction.Transactional;
import org.example.kttravel.dto.ScheduleDTO;
import org.example.kttravel.entity.Schedule;
import org.example.kttravel.entity.Tour;
import org.example.kttravel.mapper.ScheduleMapper;
import org.example.kttravel.repository.ScheduleRepository;
import org.example.kttravel.repository.TourRepository;
import org.example.kttravel.service.ScheduleService;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private TourRepository tourRepository;

    @Override
    public ScheduleDTO getScheduleById(int id) {
        Schedule schedule = scheduleRepository.findById(id).orElseThrow(() -> new RuntimeException("Schedule not found"));
        return ScheduleMapper.INSTANCE.toDTO(schedule);
    }

    @Override
    public ScheduleDTO saveSchedule(ScheduleDTO scheduleDTO) {
        Schedule schedule = ScheduleMapper.INSTANCE.toEntity(scheduleDTO);
//        Tour tour = tourRepository.findById(scheduleDTO.getTourID())
//                .orElseThrow(() -> new RuntimeException("Tour not found"));

//        schedule.setTour(tour);

        Schedule savedSchedule = scheduleRepository.save(schedule);
        return ScheduleMapper.INSTANCE.toDTO(savedSchedule);
    }

    @Override
    public void deleteScheduleByTourID(int tourID) {
        scheduleRepository.deleteByTourId(tourID);
    }
}
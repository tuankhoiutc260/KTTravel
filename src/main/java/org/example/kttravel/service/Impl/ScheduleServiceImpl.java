package org.example.kttravel.service.Impl;

import org.example.kttravel.dto.ScheduleDTO;
import org.example.kttravel.entity.Schedule;
import org.example.kttravel.exception.ResourceNotFoundException;
import org.example.kttravel.mapper.ScheduleMapper;
import org.example.kttravel.repository.ScheduleRepository;
import org.example.kttravel.service.ScheduleService;
import org.hibernate.service.spi.ServiceException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ScheduleServiceImpl implements ScheduleService {
    private final ScheduleRepository scheduleRepository;

    public ScheduleServiceImpl(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    @Override
    public ScheduleDTO getScheduleById(int id) {
        Schedule schedule = scheduleRepository.findById(id).orElseThrow(() -> new RuntimeException("Schedule not found"));
        return ScheduleMapper.INSTANCE.toDTO(schedule);
    }

    @Override
    public List<ScheduleDTO> getAllSchedule() {
        try {
            List<Schedule> scheduleList = scheduleRepository.findAll();
            return scheduleList.stream()
                    .map(ScheduleMapper.INSTANCE::toDTO)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new RuntimeException("Failed to retrieve schedules", e);
        }
    }

    @Override
    public ScheduleDTO addSchedule(ScheduleDTO scheduleDTO) {
        try {
            Schedule newSchedule = ScheduleMapper.INSTANCE.toEntity(scheduleDTO);
            newSchedule.setTitle(scheduleDTO.getTitle());
            newSchedule.setDescription(scheduleDTO.getDescription());
            newSchedule.setTour(null);
            return ScheduleMapper.INSTANCE.toDTO(scheduleRepository.save(newSchedule));
        } catch (RuntimeException e) {
            throw new ServiceException("Failed to add schedule: " + e.getMessage(), e);
        }
    }

    @Override
    public ScheduleDTO updateSchedule(int id, ScheduleDTO scheduleDTO) {
        Schedule exitingSchedule = scheduleRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Schedule not found"));
        try {
            exitingSchedule.setTitle(scheduleDTO.getTitle());
            exitingSchedule.setDescription(scheduleDTO.getDescription());
//            exitingSchedule.setTour(null);
            return ScheduleMapper.INSTANCE.toDTO(scheduleRepository.save(exitingSchedule));
        } catch (RuntimeException e) {
            throw new ServiceException("Failed to Update Schedule: " + e.getMessage(), e);
        }
    }

    @Override
    public void deleteSchedule(int id) {
        scheduleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Schedule not found"));
        try {
            scheduleRepository.deleteById(id);
        } catch (ResourceNotFoundException e) {
            throw new ServiceException("Failed to delete Schedule: " + e.getMessage(), e);
        }
    }
}
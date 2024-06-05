package org.example.kttravel.service;

import org.example.kttravel.dto.ScheduleDTO;

import java.util.List;

public interface ScheduleService {
    ScheduleDTO getScheduleById(int id);
    List<ScheduleDTO> getAllSchedule();
    ScheduleDTO addSchedule(ScheduleDTO scheduleDTO);
    ScheduleDTO updateSchedule(int id, ScheduleDTO scheduleDTO);
    void deleteSchedule(int id);
}
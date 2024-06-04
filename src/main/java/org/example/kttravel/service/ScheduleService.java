package org.example.kttravel.service;

import org.example.kttravel.dto.ScheduleDTO;

import java.util.List;

public interface ScheduleService {
    ScheduleDTO getScheduleById(int id);
    ScheduleDTO saveSchedule(ScheduleDTO scheduleDTO);
    void deleteScheduleByTourID(int id);
//    void deleteScheduleByID(int tourID);
}
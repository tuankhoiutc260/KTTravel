package org.example.kttravel.mapper;

import org.example.kttravel.dto.ScheduleDTO;
import org.example.kttravel.model.Schedule;
import org.example.kttravel.model.Tour;

import java.util.ArrayList;
import java.util.List;

public class ScheduleMapper {
    public static Schedule mapToSchedule(ScheduleDTO scheduleDTO) {
        Schedule schedule = new Schedule();

        try {
            schedule.setTitle(scheduleDTO.getTitle());
            schedule.setDescription(scheduleDTO.getDescription());
        } catch (Exception e) {

        }
        return schedule;
    }

    public static List<Schedule> createSchedulesForTour(List<ScheduleDTO> scheduleDTOList, Tour tour) {
        List<Schedule> schedules = new ArrayList<>();
        if (scheduleDTOList != null) {
            for (ScheduleDTO scheduleDTO : scheduleDTOList) {
                Schedule schedule = mapToSchedule(scheduleDTO);
                schedule.setTour(tour);
                schedules.add(schedule);
            }
        }
        return schedules;
    }
}
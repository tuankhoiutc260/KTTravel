package org.example.kttravel.controller;

import org.example.kttravel.dto.ScheduleDTO;
import org.example.kttravel.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/schedules")
public class ScheduleController {

//    @Autowired
//    private ScheduleService scheduleService;
//
//    @GetMapping("/{id}")
//    public ScheduleDTO getScheduleById(@PathVariable int id) {
//        return scheduleService.getScheduleById(id);
//    }
//
//    @GetMapping
//    public List<ScheduleDTO> getAllSchedules() {
//        return scheduleService.getAllSchedules();
//    }
//
//    @PostMapping
//    public ScheduleDTO createSchedule(@RequestBody ScheduleDTO scheduleDTO) {
//        return scheduleService.createSchedule(scheduleDTO);
//    }
//
//    @PutMapping("/{id}")
//    public ScheduleDTO updateSchedule(@PathVariable int id, @RequestBody ScheduleDTO scheduleDTO) {
//        return scheduleService.updateSchedule(id, scheduleDTO);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteSchedule(@PathVariable int id) {
//        scheduleService.deleteSchedule(id);
//    }
}
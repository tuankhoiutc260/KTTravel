package org.example.kttravel.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.kttravel.model.City;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TourDTO {
    private String name;
    private String description;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date departureDate;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date destinationDate;
    private int positionDepartureID;
    private int positionDestinationID;
    private String centralizedTimeInf;
    private String centralizedPositionInf;
    private List<ScheduleDTO> schedules;
    private double mainPrice;
    private double adultPrice;
    private double childrenPrice;
    private double toddlerPrice;
    private double infantPrice;
    private List<String> highlight;
    private List<String> included;
    private List<String> excluded;
}

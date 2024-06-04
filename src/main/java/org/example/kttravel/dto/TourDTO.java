package org.example.kttravel.dto;

import lombok.*;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TourDTO {
    private String name;
    private String description;
    private Date departureDate;
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
    private List<String> highlights;
    private List<String> included;
    private List<String> excluded;
}

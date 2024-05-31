package org.example.kttravel.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tour")
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tour_id")
    private int id;
    private String name;
    private String description;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date departureDate;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date destinationDate;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "departure_city_id", referencedColumnName = "city_id")
    private City positionDeparture;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "destination_city_iD", referencedColumnName = "city_id")
    private City positionDestination;
    private String centralizedTimeInf;
    private String centralizedPositionInf;
    @OneToMany(mappedBy = "tour", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Schedule> schedules;
    private double mainPrice;
    private double adultPrice;
    private double childrenPrice;
    private double toddlerPrice;
    private double infantPrice;
    @ElementCollection
    @CollectionTable(name = "tour_highlights", joinColumns = @JoinColumn(name = "tour_id"))
    @Column(name = "highlight")
    private List<String> highlight;
    @ElementCollection
    @CollectionTable(name = "tour_included", joinColumns = @JoinColumn(name = "tour_id"))
    @Column(name = "included")
    private List<String> included;
    @ElementCollection
    @CollectionTable(name = "tour_excluded", joinColumns = @JoinColumn(name = "tour_id"))
    @Column(name = "excluded")
    private List<String> excluded;
}

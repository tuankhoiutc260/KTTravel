package org.example.kttravel.repository;

import org.example.kttravel.entity.Tour;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TourRepository extends JpaRepository<Tour, Integer> {
    Tour findByName(String tourName);
}

package org.example.kttravel.repository;

import org.example.kttravel.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {
    City findByName(String name);
}

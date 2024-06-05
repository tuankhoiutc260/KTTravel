package org.example.kttravel.repository;

import jakarta.transaction.Transactional;
import org.example.kttravel.entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {
    @Modifying
    @Transactional
    @Query("DELETE FROM Schedule s WHERE s.tour.id = :tourId")

    void deleteByTourId(@Param("tourId") int tourId);
}

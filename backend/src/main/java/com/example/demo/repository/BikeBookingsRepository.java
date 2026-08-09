package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.BikeBookings;

@Repository
public interface BikeBookingsRepository extends JpaRepository<BikeBookings, Integer> {

}
package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.BikeBookings;
import com.example.demo.repository.BikeBookingsRepository;

@Service
public class BikeBookingsService {

    @Autowired
    BikeBookingsRepository repository;

    @Autowired
    EmailService emailService;

    public String placeOrder(BikeBookings booking) {

        // Save booking into PostgreSQL
        repository.save(booking);

        // Send confirmation email
        emailService.sendBookingEmail(
                booking.getEmail(),
                booking.getName(),
                booking.getModel()
        );

        return "Booking Successful";
    }
}
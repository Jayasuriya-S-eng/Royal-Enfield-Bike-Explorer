package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Admin;
import com.example.demo.entity.BikeBookings;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.BikeBookingsRepository;

@Service
public class AdminService {

    @Autowired
    AdminRepository repository;

    @Autowired
    BikeBookingsRepository bikeBookingsRepository;

    public String login(Admin admin) {

        Admin existingAdmin =
                repository.findByUsername(admin.getUsername());

        if (existingAdmin == null) {
            return "Admin not found";
        }

        if (existingAdmin.getPassword().equals(admin.getPassword())) {
            return "Login Successful";
        }

        return "Invalid Password";
    }

    public List<BikeBookings> getAllBookings() {

        return bikeBookingsRepository.findAll();
    }
}
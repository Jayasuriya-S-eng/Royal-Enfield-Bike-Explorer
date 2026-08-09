package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Admin;
import com.example.demo.entity.BikeBookings;
import com.example.demo.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    AdminService service;

    @PostMapping("/login")
    public String login(@RequestBody Admin admin) {

        return service.login(admin);
    }
    
    @GetMapping("/bookings")
    public List<BikeBookings> getAllBookings() {

        return service.getAllBookings();
    }
}
package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.BikeBookings;
import com.example.demo.service.BikeBookingsService;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*")
public class BikeBookingsController {

    @Autowired
    BikeBookingsService service;

    @PostMapping("/place")
    public String placeOrder(@RequestBody BikeBookings booking) {

        return service.placeOrder(booking);
    }
}
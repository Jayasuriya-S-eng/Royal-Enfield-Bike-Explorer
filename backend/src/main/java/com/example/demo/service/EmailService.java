package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendBookingEmail(String to, String name, String model) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(to);

        message.setSubject("Royal Enfield Booking Confirmation");

        message.setText(
                "Dear " + name + ",\n\n"
                + "Your Royal Enfield booking has been successfully received.\n\n"
                + "Bike Model: " + model + "\n\n"
                + "Thank you for choosing Royal Enfield.\n\n"
                + "Our team will contact you shortly.\n\n"
                + "Regards,\n"
                + "Royal Enfield Team"
        );

        mailSender.send(message);
    }
}
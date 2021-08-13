package org.vanguardhealth.healthyresponse.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.vanguardhealth.healthyresponse.models.Appointment;
import org.vanguardhealth.healthyresponse.repositories.*;


import javax.annotation.Resource;
import java.util.Optional;

@CrossOrigin
@RestController

public class AppointmentController {

    @Resource
    AppointmentRepo appointmentRepo;
}

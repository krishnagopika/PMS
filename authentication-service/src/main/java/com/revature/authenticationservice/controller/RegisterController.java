package com.revature.authenticationservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

import com.revature.authenticationservice.dto.PatientRequest;
import com.revature.authenticationservice.service.PatientService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RequestMapping("/api/authenticate/register")
@RestController
@AllArgsConstructor
@Log4j2
public class RegisterController {
private final PatientService patientService;
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public String createPatient(@RequestBody PatientRequest patientRequest) {
		
		try {
		patientService.createPatient(patientRequest);
		return "patient created successfully";
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
			
		}
		
	}
	

}

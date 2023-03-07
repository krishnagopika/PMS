package com.revature.authenticationservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

import com.revature.authenticationservice.dto.PatientResponse;
import com.revature.authenticationservice.model.Patient;
import com.revature.authenticationservice.service.PatientService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@AllArgsConstructor
@RequestMapping("/api/authenticate/login")
@Log4j2
public class LoginController {
	
	private final PatientService patientService;
	@GetMapping()
	@ResponseStatus(HttpStatus.ACCEPTED)
	public PatientResponse login(@RequestParam String email, @RequestParam String password) {
		try {
			
			PatientResponse patient = patientService.authenticatePatient(email, password);
			return patient;
		}
		catch(Exception e)
		{
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(400));
		}
		
	}
	
}

package com.revature.patientinfoservice.controller;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

import com.revature.patientinfoservice.dao.exception.RetreivalFailedException;
import com.revature.patientinfoservice.dao.exception.UpdateFailedException;
import com.revature.patientinfoservice.dto.PatientRequest;
import com.revature.patientinfoservice.dto.PatientResponse;
import com.revature.patientinfoservice.service.PatientService;
import com.revature.patientinfoservice.service.exception.PatientInfoServiceException;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/patient")
@Log4j2
public class PatientController {
	private final PatientService patientService;
	
	@GetMapping()
	@ResponseStatus(HttpStatus.OK)
	public List<PatientResponse> getAllPatients() throws SecurityException, RetreivalFailedException{
		
		try {
			return patientService.getAllPatients();
		} catch (PatientInfoServiceException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
	}
	
	@GetMapping("/")
	@ResponseStatus(HttpStatus.OK)
	public PatientResponse getPatient(@RequestParam int id) throws PatientInfoServiceException, RetreivalFailedException
	{
		try {
			return patientService.getPatient(id);
		} catch (PatientInfoServiceException e) {
			log.error(e.getMessage());
			
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
	}
	@PutMapping("/")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public PatientResponse updatePatient(@RequestParam int id, @RequestBody PatientRequest patientRequest) throws PatientInfoServiceException, UpdateFailedException
	{
		try {
			return patientService.updatePatient(id, patientRequest);
		} catch (PatientInfoServiceException e) {
			log.error(e.getMessage());
			
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
	}

	
	

}

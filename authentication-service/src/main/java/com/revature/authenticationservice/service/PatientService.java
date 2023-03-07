package com.revature.authenticationservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.authenticationservice.dao.PatientDAO;
import com.revature.authenticationservice.dao.exception.RetreivalFailedException;
import com.revature.authenticationservice.dao.exception.CreationFailedException;
import com.revature.authenticationservice.dto.PatientRequest;
import com.revature.authenticationservice.dto.PatientResponse;
import com.revature.authenticationservice.service.exception.AuthenticationServiceException;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@AllArgsConstructor
@Log4j2
public class PatientService {
	
	private final PatientDAO patientDAO; 
	
	public void createPatient(PatientRequest patientRequest) throws AuthenticationServiceException {
		try {
		
		patientDAO.createPatient(patientRequest);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new AuthenticationServiceException("a patient exists with the given email id");
		}
		
	}

	public PatientResponse authenticatePatient(String email, String password) throws AuthenticationServiceException {
		try {
		return patientDAO.authenticatePatient(email,password);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new AuthenticationServiceException("User email or password is incorrect");
			
		}
	}

}

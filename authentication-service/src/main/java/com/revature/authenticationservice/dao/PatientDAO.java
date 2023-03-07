package com.revature.authenticationservice.dao;


import java.util.Optional;

import org.springframework.stereotype.Component;

import com.revature.authenticationservice.dao.exception.CreationFailedException;
import com.revature.authenticationservice.dao.exception.RetreivalFailedException;
import com.revature.authenticationservice.dto.PatientRequest;
import com.revature.authenticationservice.dto.PatientResponse;
import com.revature.authenticationservice.model.Patient;
import com.revature.authenticationservice.repository.PatientRepository;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Component
@AllArgsConstructor
@Log4j2
public class PatientDAO {
	
	private final PatientRepository patientRepository;

	public void createPatient(PatientRequest patientRequest) throws CreationFailedException {
		try {
		
		Patient patient = Patient.builder()
				.title(patientRequest.getTitle())
				.email(patientRequest.getEmail())
				.firstName(patientRequest.getFirstName())
				.lastName(patientRequest.getLastName())
				.contactNumber(patientRequest.getContactNumber())
				.gender(patientRequest.getGender())
				.address(patientRequest.getAddress())
				.password(patientRequest.getPassword())
				.dob(patientRequest.getDob())
				.build();
		patientRepository.save(patient);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new CreationFailedException("Unable to create patient record");
		}
	}

	public PatientResponse authenticatePatient(String email, String password) throws RetreivalFailedException {
		
		try {
		Optional<Patient> patientOptional = patientRepository.authenticatePatient(email, password);
		Patient patient = patientOptional.get();
		return PatientResponse.builder()
				.id(patient.getId())
				.title(patient.getTitle())
				.email(patient.getEmail())
				.firstName(patient.getFirstName())
				.lastName(patient.getLastName())
				.contactNumber(patient.getContactNumber())
				.gender(patient.getGender())
				.address(patient.getAddress())
				.password(patient.getPassword())
				.dob(patient.getDob())
				.build();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetreivalFailedException("Unable to retreive the patient record");
			
		}
		
	}

}

package com.revature.patientinfoservice.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;

import com.revature.patientinfoservice.dao.exception.RetreivalFailedException;
import com.revature.patientinfoservice.dao.exception.UpdateFailedException;
import com.revature.patientinfoservice.dto.PatientRequest;
import com.revature.patientinfoservice.dto.PatientResponse;
import com.revature.patientinfoservice.model.Patient;
import com.revature.patientinfoservice.repository.PatientRepository;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class PatientDao {

	private final PatientRepository patientRepository;


	public List<PatientResponse> getAllPatients() throws RetreivalFailedException {
		try {
		
		List<Patient> patients = patientRepository.findAll();
		
		return patients.stream().map(patient -> mapToPatientResponse(patient)).toList();
		}
		catch(Exception e) {
			throw new RetreivalFailedException("Unable to get the details of all patients");
		}
	}

	private PatientResponse mapToPatientResponse(Patient patient) {
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

	public PatientResponse getPatient(int id) throws RetreivalFailedException {
		
		try {
		
		Optional<Patient> patientOptional = patientRepository.findById(id);
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
			throw new RetreivalFailedException("Unable to get the pateint details");
			
		}
				
	}

	public PatientResponse updatePatient(int id, PatientRequest patientRequest) throws UpdateFailedException {
		
		try {
		
		Optional<Patient> patientOptional = patientRepository.findById(id);
		if(patientRepository.findById(id)!=null) {
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
				.id(id)
				.build();
		patientRepository.save(patient);
		patientOptional = patientRepository.findById(id);
		patient = patientOptional.get();
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
		}
		catch(Exception e) {
			throw new UpdateFailedException("Unable to update the patient details");
			
		}
		return null;
	}


}

package com.revature.patientinfoservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.patientinfoservice.controller.PatientController;
import com.revature.patientinfoservice.dao.PatientDao;
import com.revature.patientinfoservice.dao.exception.RetreivalFailedException;
import com.revature.patientinfoservice.dao.exception.UpdateFailedException;
import com.revature.patientinfoservice.dto.PatientRequest;
import com.revature.patientinfoservice.dto.PatientResponse;
import com.revature.patientinfoservice.service.exception.PatientInfoServiceException;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@AllArgsConstructor
@Log4j2
public class PatientService {
	
	private final PatientDao patientDAO; 
	

	public List<PatientResponse> getAllPatients() throws RetreivalFailedException, PatientInfoServiceException {
		try {
		return patientDAO.getAllPatients();
		}
		catch(RetreivalFailedException e) {
			log.error(e.getMessage());
			throw new PatientInfoServiceException("Unable to get patients info");
			
		}
	}

	public PatientResponse getPatient(int id) throws RetreivalFailedException, PatientInfoServiceException {
		try {
		
		return patientDAO.getPatient(id);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new PatientInfoServiceException("Unable to get the patient info");
			
		}
	}

	public PatientResponse updatePatient(int id, PatientRequest patientRequest) throws UpdateFailedException, PatientInfoServiceException {
		try {
		return patientDAO.updatePatient(id, patientRequest);
		}
		catch(UpdateFailedException e)
		{
			log.error(e.getMessage());
			throw new PatientInfoServiceException("Unable to modify patient details ");
			
		}
	}

}

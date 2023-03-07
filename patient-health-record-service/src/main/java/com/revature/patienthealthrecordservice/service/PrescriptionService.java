package com.revature.patienthealthrecordservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.patienthealthrecordservice.dao.PrescriptionDao;
import com.revature.patienthealthrecordservice.dao.exception.CreationFailedException;
import com.revature.patienthealthrecordservice.dto.PrescriptionRequest;
import com.revature.patienthealthrecordservice.dto.PrescriptionResponse;
import com.revature.patienthealthrecordservice.dto.VisitDetailsResponse;
import com.revature.patienthealthrecordservice.service.exception.PrescriptionServiceException;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@AllArgsConstructor
@Log4j2
public class PrescriptionService {
	
	private final PrescriptionDao prescriptionDao;
	
	public List<PrescriptionResponse> getAllPrescriptions(int visit_details_id) throws PrescriptionServiceException {
		try {
		return prescriptionDao.getAllPrescriptions(visit_details_id);
		}
		catch (Exception e) {
			log.error(e.getMessage());
			throw new PrescriptionServiceException("Unable to get all prescriptions");
			
		}
	}

public void createPrescription(PrescriptionRequest prescriptionRequest) throws PrescriptionServiceException {
	try {
	
	prescriptionDao.createPrescription(prescriptionRequest);
	}
	catch (Exception e) {
		log.error(e.getMessage());
		throw new PrescriptionServiceException("Unable to create prescription record");
		
	}
	
}

public PrescriptionResponse updatePrescription(PrescriptionRequest prescriptionRequest, int prescription_id) throws PrescriptionServiceException {
	try {
	
	return prescriptionDao.updatePrescription(prescriptionRequest,prescription_id);
	}
	catch (Exception e) {
		log.error(e.getMessage());
		throw new PrescriptionServiceException("Unable to update Prescription");
		
	}
}

public PrescriptionResponse deletePrescription(int prescription_id) throws PrescriptionServiceException {
	try {
	
	return prescriptionDao.deletePrescription(prescription_id);
	}
	catch (Exception e) {
		log.error(e.getMessage());
		throw new PrescriptionServiceException("Unable to delete prescription");
		
	}
}

	

}

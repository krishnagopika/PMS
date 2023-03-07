package com.revature.patienthealthrecordservice.dao;

import java.util.List;

import org.springframework.stereotype.Component;

import com.revature.patienthealthrecordservice.dao.exception.CreationFailedException;
import com.revature.patienthealthrecordservice.dao.exception.DeletionFailedException;
import com.revature.patienthealthrecordservice.dao.exception.RetreivalFailedException;
import com.revature.patienthealthrecordservice.dao.exception.UpdateFailedException;
import com.revature.patienthealthrecordservice.dto.PrescriptionRequest;
import com.revature.patienthealthrecordservice.dto.PrescriptionResponse;
import com.revature.patienthealthrecordservice.model.Prescription;
import com.revature.patienthealthrecordservice.repository.PrescriptionRepository;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;


@Component
@AllArgsConstructor
@Log4j2
public class PrescriptionDao {
	private final PrescriptionRepository prescriptionRepository;

	public List<PrescriptionResponse> getAllPrescriptions(int visit_details_id) throws RetreivalFailedException {
		try {
		List<Prescription> prescriptions = prescriptionRepository.getAllPrescriptionsByVistDetails(visit_details_id);
		
		return prescriptions.stream().map(prescription -> mapToPrescriptionResponse(prescription)).toList();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetreivalFailedException("Unable to get all records");
			
		}
	}

	private PrescriptionResponse mapToPrescriptionResponse(Prescription prescription) {
		// TODO Auto-generated method stub
		return PrescriptionResponse.builder()
				.dosage(prescription.getDosage())
				.id(prescription.getId())
				.name(prescription.getName())
				.visit_details_id(prescription.getVisit_details_id()).build();
	}

	public void createPrescription(PrescriptionRequest prescriptionRequest) throws CreationFailedException {
		
		try {
	
		Prescription prescription = Prescription.builder()
				.dosage(prescriptionRequest.getDosage())
				.name(prescriptionRequest.getName())
				.visit_details_id(prescriptionRequest.getVisit_details_id())
				.build();
		prescriptionRepository.save(prescription);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new CreationFailedException("Unable to create prescription record");
			
		}
		
	}

	public PrescriptionResponse updatePrescription(PrescriptionRequest prescriptionRequest, int prescription_id) throws UpdateFailedException {
		try {
		Prescription prescription = Prescription.builder()
				.dosage(prescriptionRequest.getDosage())
				.name(prescriptionRequest.getName())
				.visit_details_id(prescriptionRequest.getVisit_details_id())
				.id(prescription_id)
				.build();
		prescriptionRepository.save(prescription);
		prescription = prescriptionRepository.findById(prescription_id).get();
		return PrescriptionResponse.builder()
				.dosage(prescription.getDosage())
				.name(prescription.getName())
				.visit_details_id(prescription.getVisit_details_id())
				.id(prescription_id)
				.build();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new UpdateFailedException("Unable to update prescription record");
			
		}
	}

	public PrescriptionResponse deletePrescription(int prescription_id) throws DeletionFailedException {
		try {
		Prescription prescription = prescriptionRepository.findById(prescription_id).get();
		prescriptionRepository.deleteById(prescription_id);
		return PrescriptionResponse.builder()
				.dosage(prescription.getDosage())
				.name(prescription.getName())
				.visit_details_id(prescription.getVisit_details_id())
				.id(prescription_id)
				.build();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new DeletionFailedException("Unable to delete prescription record");
		}
	}
	

}

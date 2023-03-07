package com.revature.patienthealthrecordservice.dao;

import java.util.List;

import org.springframework.stereotype.Component;

import com.revature.patienthealthrecordservice.dao.exception.CreationFailedException;
import com.revature.patienthealthrecordservice.dao.exception.RetreivalFailedException;
import com.revature.patienthealthrecordservice.dto.HealthRecordRequest;
import com.revature.patienthealthrecordservice.dto.HealthRecordResponse;
import com.revature.patienthealthrecordservice.dto.VisitDetailsRequest;
import com.revature.patienthealthrecordservice.dto.VisitDetailsResponse;
import com.revature.patienthealthrecordservice.model.Prescription;
import com.revature.patienthealthrecordservice.model.Test;
import com.revature.patienthealthrecordservice.model.VisitDetails;
import com.revature.patienthealthrecordservice.repository.PrescriptionRepository;
import com.revature.patienthealthrecordservice.repository.TestRepository;
import com.revature.patienthealthrecordservice.repository.VisitDetailsRepository;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Component
@AllArgsConstructor
@Log4j2
public class VisitDetailsDao {
	private final VisitDetailsRepository visitDetailsRepository;
	

	public void createVisitDetails(VisitDetailsRequest visitDetailsRequest) throws CreationFailedException {
		try {
		VisitDetails visitDetails = VisitDetails.builder()
				.allergy(visitDetailsRequest.getAllergy())
				.appointment_id(visitDetailsRequest.getAppointment_id())
				.blood_group(visitDetailsRequest.getBlood_group())
				.blood_pressure_diastolic(visitDetailsRequest.getBlood_pressure_diastolic())
				.blood_pressure_systolic(visitDetailsRequest.getBlood_pressure_systolic())
				.body_temperature(visitDetailsRequest.getBody_temperature())
				.respiration_rate(visitDetailsRequest.getRespiration_rate())
				.height(visitDetailsRequest.getHeight())
				.key_notes(visitDetailsRequest.getKey_notes())
				.nurse_email(visitDetailsRequest.getNurse_email())
				.patient_id(visitDetailsRequest.getPatient_id())
				.physician_email(visitDetailsRequest.getPhysician_email())
				.weight(visitDetailsRequest.getWeight())
				.date(visitDetailsRequest.getDate())
				.build();
		visitDetailsRepository.save(visitDetails);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new CreationFailedException("Unable to create the record");
			
		}
		
             
		
	}

	public VisitDetailsResponse updateVisitDetails(VisitDetailsRequest visitDetailsRequest, int visit_details_id) throws RetreivalFailedException {
		try {
		VisitDetails visitDetails = VisitDetails.builder()
				.allergy(visitDetailsRequest.getAllergy())
				.appointment_id(visitDetailsRequest.getAppointment_id())
				.blood_group(visitDetailsRequest.getBlood_group())
				.blood_pressure_diastolic(visitDetailsRequest.getBlood_pressure_diastolic())
				.blood_pressure_systolic(visitDetailsRequest.getBlood_pressure_systolic())
				.body_temperature(visitDetailsRequest.getBody_temperature())
				.height(visitDetailsRequest.getHeight())
				.key_notes(visitDetailsRequest.getKey_notes())
				.respiration_rate(visitDetailsRequest.getRespiration_rate())
				.nurse_email(visitDetailsRequest.getNurse_email())
				.patient_id(visitDetailsRequest.getPatient_id())
				.physician_email(visitDetailsRequest.getPhysician_email())
				.weight(visitDetailsRequest.getWeight())
				.id(visit_details_id)
				.date(visitDetailsRequest.getDate())
				.build();
		visitDetailsRepository.save(visitDetails);
		
		visitDetails = visitDetailsRepository.findById(visit_details_id).get();
		
		VisitDetailsResponse visitDetailsResponse = VisitDetailsResponse.builder()
				.allergy(visitDetails.getAllergy())
				.appointment_id(visitDetails.getAppointment_id())
				.blood_group(visitDetails.getBlood_group())
				.blood_pressure_diastolic(visitDetails.getBlood_pressure_diastolic())
				.blood_pressure_systolic(visitDetails.getBlood_pressure_systolic())
				.body_temperature(visitDetails.getBody_temperature())
				.respiration_rate(visitDetails.getRespiration_rate())
				.height(visitDetails.getHeight())
				.key_notes(visitDetails.getKey_notes())
				.nurse_email(visitDetails.getNurse_email())
				.patient_id(visitDetails.getPatient_id())
				.physician_email(visitDetails.getPhysician_email())
				.weight(visitDetails.getWeight())
				.date(visitDetails.getDate())
				.id(visit_details_id)
				.build();
				
		
		return visitDetailsResponse;
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetreivalFailedException("Unable to get all records");
			
		}
	}

	public VisitDetailsResponse getRecentVisitDetails(int patient_id) throws RetreivalFailedException {
		try {
		
		VisitDetails visitDetails = visitDetailsRepository.getRecentVisitDetails(patient_id);
	     return VisitDetailsResponse.builder()
	    		 .allergy(visitDetails.getAllergy())
					.appointment_id(visitDetails.getAppointment_id())
					.blood_group(visitDetails.getBlood_group())
					.blood_pressure_diastolic(visitDetails.getBlood_pressure_diastolic())
					.blood_pressure_systolic(visitDetails.getBlood_pressure_systolic())
					.body_temperature(visitDetails.getBody_temperature())
					.height(visitDetails.getHeight())
					.respiration_rate(visitDetails.getRespiration_rate())
					.key_notes(visitDetails.getKey_notes())
					.nurse_email(visitDetails.getNurse_email())
					.patient_id(visitDetails.getPatient_id())
					.physician_email(visitDetails.getPhysician_email())
					.weight(visitDetails.getWeight())
					.id(visitDetails.getId())
					.date(visitDetails.getDate())
					.build();
					
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetreivalFailedException("Unable to get the record");
			
		}
	}

	private VisitDetailsResponse mapToVisitDetailsResponse(VisitDetails visitDetails) {
		// TODO Auto-generated method stub
		return VisitDetailsResponse.builder()
				.allergy(visitDetails.getAllergy())
				.appointment_id(visitDetails.getAppointment_id())
				.blood_group(visitDetails.getBlood_group())
				.blood_pressure_diastolic(visitDetails.getBlood_pressure_diastolic())
				.blood_pressure_systolic(visitDetails.getBlood_pressure_systolic())
				.body_temperature(visitDetails.getBody_temperature())
				.height(visitDetails.getHeight())
				.respiration_rate(visitDetails.getRespiration_rate())
				.key_notes(visitDetails.getKey_notes())
				.nurse_email(visitDetails.getNurse_email())
				.patient_id(visitDetails.getPatient_id())
				.physician_email(visitDetails.getPhysician_email())
				.weight(visitDetails.getWeight())
				.id(visitDetails.getId())
				.date(visitDetails.getDate())
				.build();
	}


}

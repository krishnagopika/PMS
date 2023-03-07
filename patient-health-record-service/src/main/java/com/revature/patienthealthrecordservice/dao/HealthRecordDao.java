package com.revature.patienthealthrecordservice.dao;

import java.util.List;

import org.springframework.stereotype.Component;

import com.revature.patienthealthrecordservice.dao.exception.RetreivalFailedException;
import com.revature.patienthealthrecordservice.dao.exception.UpdateFailedException;
import com.revature.patienthealthrecordservice.dto.HealthRecordRequest;
import com.revature.patienthealthrecordservice.dto.HealthRecordResponse;
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
public class HealthRecordDao {
	
	private final PrescriptionRepository prescriptionRepository;
	private final TestRepository testRepository;
	private final VisitDetailsRepository visitDetailsRepository;
	

	public List<HealthRecordResponse> getPatientHealthRecords(int patient_id) throws RetreivalFailedException {
		try {
			List<VisitDetails> visitDetails = visitDetailsRepository.getAllVisitDetailsByPatientId(patient_id);
			List<HealthRecordResponse> healthRecordResponses = visitDetails.stream().map(visitDetail -> mapToHealthRecordResponse(visitDetail)).toList();
			return healthRecordResponses;
			
			
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetreivalFailedException("Unable to retreive Health records for patient id"+patient_id);
		}
	}


	private HealthRecordResponse mapToHealthRecordResponse(VisitDetails visitDetail) {
		List<Prescription> prescriptions = prescriptionRepository.getAllPrescriptionsByVistDetails(visitDetail.getId());
		List<Test> tests = testRepository.getAllTestsByVisitDetailsID(visitDetail.getId());
		
		return HealthRecordResponse.builder()
				.allergy(visitDetail.getAllergy())
				.appointment_id(visitDetail.getAppointment_id())
				.blood_group(visitDetail.getBlood_group())
				.blood_pressure_systolic(visitDetail.getBlood_pressure_systolic())
				.blood_pressure_diastolic(visitDetail.getBlood_pressure_diastolic())
				.body_temperature(visitDetail.getBody_temperature())
				.height(visitDetail.getHeight())
				.weight(visitDetail.getHeight())
				.respiration_rate(visitDetail.getRespiration_rate())
				.key_notes(visitDetail.getKey_notes())
				.nurse_email(visitDetail.getNurse_email())
				.patient_id(visitDetail.getPatient_id())
				.physician_email(visitDetail.getPhysician_email())
				.prescription(prescriptions)
				.tests(tests)
				.date(visitDetail.getDate())
				.build();
		
	}


	public HealthRecordResponse getHealthRecordByAppointmentId(int appointment_id) throws RetreivalFailedException {
		try {
		
		VisitDetails visitDetail = visitDetailsRepository.getVisitDetailsByAppointmentId(appointment_id);
		List<Prescription> prescriptions = prescriptionRepository.getAllPrescriptionsByVistDetails(visitDetail.getId());
		List<Test> tests = testRepository.getAllTestsByVisitDetailsID(visitDetail.getId());
		
		return HealthRecordResponse.builder()
				.allergy(visitDetail.getAllergy())
				.appointment_id(visitDetail.getAppointment_id())
				.blood_group(visitDetail.getBlood_group())
				.blood_pressure_systolic(visitDetail.getBlood_pressure_systolic())
				.blood_pressure_diastolic(visitDetail.getBlood_pressure_diastolic())
				.body_temperature(visitDetail.getBody_temperature())
				.height(visitDetail.getHeight())
				.weight(visitDetail.getWeight())
				.respiration_rate(visitDetail.getRespiration_rate())
				.key_notes(visitDetail.getKey_notes())
				.nurse_email(visitDetail.getNurse_email())
				.patient_id(visitDetail.getPatient_id())
				.physician_email(visitDetail.getPhysician_email())
				.prescription(prescriptions)
				.visitDetails_id(visitDetail.getId())
				.allergy(visitDetail.getAllergy())
				.tests(tests)
				.date(visitDetail.getDate())
				.build();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetreivalFailedException("Unable to retreive Health records for appointment id"+appointment_id);
		}
		
	}


	public HealthRecordResponse updateHealthRecordResponse(HealthRecordRequest healthRecordRequest, int id) throws UpdateFailedException {
		try {
			VisitDetails visitDetails = VisitDetails.builder()
					.allergy(healthRecordRequest.getAllergy())
					.appointment_id(healthRecordRequest.getAppointment_id())
					.blood_group(healthRecordRequest.getBlood_group())
					.blood_pressure_diastolic(healthRecordRequest.getBlood_pressure_diastolic())
					.blood_pressure_systolic(healthRecordRequest.getBlood_pressure_systolic())
					.body_temperature(healthRecordRequest.getBody_temperature())
					.height(healthRecordRequest.getHeight())
					.respiration_rate(healthRecordRequest.getRespiration_rate())
					.key_notes(healthRecordRequest.getKey_notes())
					.nurse_email(healthRecordRequest.getNurse_email())
					.patient_id(healthRecordRequest.getPatient_id())
					.physician_email(healthRecordRequest.getPhysician_email())
					.weight(healthRecordRequest.getWeight())
					.date(healthRecordRequest.getDate())
					.id(id)
					.build();
			visitDetailsRepository.save(visitDetails);
			List<Prescription> prescriptions= healthRecordRequest.getPrescription();
			for(Prescription p : prescriptions) {
				prescriptionRepository.save(p);
			}
			List<Test> tests = healthRecordRequest.getTests();
			for(Test t : tests) {
				testRepository.save(t);
			}
			
		VisitDetails visitDetail = visitDetailsRepository.getVisitDetailsByAppointmentId(healthRecordRequest.getAppointment_id());
		prescriptions = prescriptionRepository.getAllPrescriptionsByVistDetails(visitDetail.getId());
		tests = testRepository.getAllTestsByVisitDetailsID(visitDetail.getId());
		return HealthRecordResponse.builder()
				.allergy(visitDetail.getAllergy())
				.appointment_id(visitDetail.getAppointment_id())
				.blood_group(visitDetail.getBlood_group())
				.blood_pressure_systolic(visitDetail.getBlood_pressure_systolic())
				.blood_pressure_diastolic(visitDetail.getBlood_pressure_diastolic())
				.body_temperature(visitDetail.getBody_temperature())
				.height(visitDetail.getHeight())
				.weight(visitDetail.getHeight())
				.respiration_rate(visitDetail.getRespiration_rate())
				.key_notes(visitDetail.getKey_notes())
				.nurse_email(visitDetail.getNurse_email())
				.patient_id(visitDetail.getPatient_id())
				.physician_email(visitDetail.getPhysician_email())
				.date(visitDetail.getDate())
				.prescription(prescriptions)
				.tests(tests)
				.build();
		
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new UpdateFailedException("Unable to update health record");
		}
		
		
		
	}

}

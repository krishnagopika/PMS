package com.revature.patienthealthrecordservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.patienthealthrecordservice.dao.HealthRecordDao;
import com.revature.patienthealthrecordservice.dto.HealthRecordRequest;
import com.revature.patienthealthrecordservice.dto.HealthRecordResponse;
import com.revature.patienthealthrecordservice.service.exception.HealthRecordServiceException;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@AllArgsConstructor
@Log4j2
public class HealthRecordService {
     
	private final HealthRecordDao healthRecordDao;
	public List<HealthRecordResponse> getPatientHealthRecords(int patient_id) throws HealthRecordServiceException {
		
		try {
			return healthRecordDao.getPatientHealthRecords(patient_id);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new  HealthRecordServiceException("Unable to retrieve patient health records");
		}
	}
	public HealthRecordResponse getHealthRecordByAppointmentId(int appointment_id) throws HealthRecordServiceException {
		try {
			return healthRecordDao.getHealthRecordByAppointmentId(appointment_id);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new  HealthRecordServiceException("Unable to retrieve patient health record");
		}
	}
	public HealthRecordResponse updateHealthRecordResponse(HealthRecordRequest healthRecordRequest, int id) throws HealthRecordServiceException {
		
		try {
			return healthRecordDao.updateHealthRecordResponse(healthRecordRequest, id);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new  HealthRecordServiceException("Unable to update patient health record");
		}
	}

}

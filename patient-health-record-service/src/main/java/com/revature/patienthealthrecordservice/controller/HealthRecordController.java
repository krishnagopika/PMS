package com.revature.patienthealthrecordservice.controller;

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

import com.revature.patienthealthrecordservice.dto.HealthRecordRequest;
import com.revature.patienthealthrecordservice.dto.HealthRecordResponse;
import com.revature.patienthealthrecordservice.dto.VisitDetailsRequest;
import com.revature.patienthealthrecordservice.dto.VisitDetailsResponse;
import com.revature.patienthealthrecordservice.service.HealthRecordService;
import com.revature.patienthealthrecordservice.service.VisitDetailsService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/api/")
@AllArgsConstructor
@Log4j2
public class HealthRecordController {
	
	private final  HealthRecordService healthRecordService;
	private final VisitDetailsService visitDetailsService;
	
	@GetMapping("health-records")
	@ResponseStatus(HttpStatus.OK)
	public List<HealthRecordResponse> getPatientHealthRecords(@RequestParam int patient_id) {
		
		try {
			return healthRecordService.getPatientHealthRecords(patient_id);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
			
		}
	}
	@GetMapping("health-record")
	@ResponseStatus(HttpStatus.OK)
	public VisitDetailsResponse getRecentVisitDetails( @RequestParam int patient_id ) {
    	try {
    	      return visitDetailsService.getRecentVisitDetails(patient_id);
    	}
    	catch(Exception e) {
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
			
		}
		
	}
	@GetMapping("health-record/")
	@ResponseStatus(HttpStatus.OK)
	public HealthRecordResponse getHealthRecordByAppointmentId(@RequestParam int appointment_id ) {
    	try {
    	      return healthRecordService.getHealthRecordByAppointmentId(appointment_id);
    	}
    	catch(Exception e) {
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
			
		}
		
	}
	@PostMapping("health-record")
	@ResponseStatus(HttpStatus.CREATED)
    public String createPatientHealthRecord(@RequestBody VisitDetailsRequest visitDetailsRequest ) {
    	try {
    		System.out.println(visitDetailsRequest.getAppointment_id());
    	       visitDetailsService.createVisitDetails(visitDetailsRequest);
    	}
    	catch(Exception e) {
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
			
		}
		return null;
		
	}
    @PutMapping("health-record")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public HealthRecordResponse updatePatientHealthRecord(@RequestBody HealthRecordRequest healthRecordRequest, int id ) {
    	try {
 	       return healthRecordService.updateHealthRecordResponse(healthRecordRequest,id);
 	}
 	catch(Exception e) {
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
			
		}
		
	}

}

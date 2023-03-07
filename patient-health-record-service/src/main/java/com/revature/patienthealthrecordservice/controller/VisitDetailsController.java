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
import com.revature.patienthealthrecordservice.dto.VisitDetailsRequest;
import com.revature.patienthealthrecordservice.dto.VisitDetailsResponse;
import com.revature.patienthealthrecordservice.service.VisitDetailsService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@AllArgsConstructor
@RequestMapping("/api/health-records/")
@Log4j2
public class VisitDetailsController {
	
	private final VisitDetailsService visitDetailsService;
	
	@PostMapping("patient/visit-details")
	@ResponseStatus(HttpStatus.CREATED)
	public String createVisitDetails(@RequestBody VisitDetailsRequest visitDetailsRequest) {
		try {
			visitDetailsService.createVisitDetails(visitDetailsRequest);
			return "Visit details added successfully";
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
	}
	@PutMapping("patient/visit-details/")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public VisitDetailsResponse updateVisitDetails(@RequestBody VisitDetailsRequest visitDetailsRequest, @RequestParam int visit_details_id)
	{
		try {
			return visitDetailsService.updateVisitDetails(visitDetailsRequest, visit_details_id);
		}
	catch(Exception e) {
		log.error(e.getMessage());
		throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
	    }
	}
	@GetMapping("public/patient/visit-details")
	@ResponseStatus(HttpStatus.OK)
	public VisitDetailsResponse getRecentVistDetails(@RequestParam int patient_id) {
		try {
			
			return visitDetailsService.getRecentVisitDetails(patient_id);
		}
		catch(Exception e)
		{
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
	}
	
	
}


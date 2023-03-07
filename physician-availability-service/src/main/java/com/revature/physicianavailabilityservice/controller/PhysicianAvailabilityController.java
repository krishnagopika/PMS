package com.revature.physicianavailabilityservice.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

import com.revature.physicianavailabilityservice.dto.PhysicianAvailabilityRequest;
import com.revature.physicianavailabilityservice.dto.PhysicianAvailabilityResponse;
import com.revature.physicianavailabilityservice.service.PhysicianAvailabilityService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@AllArgsConstructor
@Log4j2
public class PhysicianAvailabilityController {
	
	private final PhysicianAvailabilityService physicianAvailabilityService; 
	
	@PostMapping("/api/physician-availability")
	@ResponseStatus(HttpStatus.CREATED)
	public String createPhysicianAvailability(@RequestBody PhysicianAvailabilityRequest physicianAvailabilityRequest ) {
		
		try {
			physicianAvailabilityService.createPhysicianAvailability(physicianAvailabilityRequest);
			
			return "Physician Availability Created";
			
		}
		catch(Exception e) {
			
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
		
	}
	
	@PutMapping("/api/physician-availability")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public PhysicianAvailabilityResponse updatePhysicianAvailability(@RequestParam int id, @RequestBody PhysicianAvailabilityRequest physicianAvailabilityRequest ) {
		try {
		
		return physicianAvailabilityService.updatePhysicianAvailability(id, physicianAvailabilityRequest);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
		
	}
	
	@DeleteMapping("/api/physician-availability")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public void deletePhysicianAvailability(@RequestParam int id ) {
		try {
		
		physicianAvailabilityService.deletePhysicianAvailability(id);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
		
	}
	
	@GetMapping("/api/physician-availability")
	@ResponseStatus(HttpStatus.OK)
	public List<PhysicianAvailabilityResponse> getAllPhysicianAvailability(){
		try {
		return physicianAvailabilityService.getAllPhysicianAvailability();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
		
	}
	@GetMapping("/api/physician-availability/email")
	@ResponseStatus(HttpStatus.OK)
	public List<PhysicianAvailabilityResponse> getPhysicianAvailabilityByEmail(@RequestParam String email) {
		try {
		return physicianAvailabilityService.getPhysisicanByEmail(email);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
		
		
	}
	@GetMapping("/api/physician-availability/")
	@ResponseStatus(HttpStatus.OK)
	public  List<PhysicianAvailabilityResponse> getAllAvailablePhysicians(){
		try {
			return physicianAvailabilityService.getAllAvailablePhysicians();
			}
			catch(Exception e) {
				log.error(e.getMessage());
				throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
			}
		
	}
	
	
	
	

}

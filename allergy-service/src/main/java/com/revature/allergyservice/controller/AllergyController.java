package com.revature.allergyservice.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

import com.revature.allergyservice.model.Allergy;
import com.revature.allergyservice.service.AllergyService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@AllArgsConstructor
@RequestMapping("api/allergy")
@Log4j2
public class AllergyController {
	
	private final AllergyService allergyService;
	@GetMapping()
	 @ResponseStatus(HttpStatus.OK) 
	public List<Allergy> getAllAllergies(){
		
		try {
			return allergyService.getAllAllergies();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
		
	}
	@GetMapping("/")
	@ResponseStatus(HttpStatus.OK) 
	public Allergy getAllergy(@RequestParam long id) {
		try {
			return allergyService.getAllergy(id);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
		
	}
	
	
	

}

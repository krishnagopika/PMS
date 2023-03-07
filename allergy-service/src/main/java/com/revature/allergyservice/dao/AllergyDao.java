package com.revature.allergyservice.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;

import com.revature.allergyservice.dao.exception.RetreivalFailedException;
import com.revature.allergyservice.model.Allergy;
import com.revature.allergyservice.repository.AllergyRepository;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Component
@AllArgsConstructor
@Log4j2
public class AllergyDao {
	
	private final AllergyRepository allergyRepository;

	public List<Allergy> getAllAllergies() throws RetreivalFailedException {
		try {
		return allergyRepository.findAll();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetreivalFailedException("Database is empty");
			
		}
	}

	public Optional<Allergy> getAllergy(long id) throws RetreivalFailedException {
		
		try {
		// TODO Auto-generated method stub
		return allergyRepository.findById(id);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetreivalFailedException("Unable to retreive the record");
			
		}
	}
	

}

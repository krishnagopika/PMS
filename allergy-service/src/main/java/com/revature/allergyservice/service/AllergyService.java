package com.revature.allergyservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.allergyservice.dao.AllergyDao;
import com.revature.allergyservice.dao.exception.RetreivalFailedException;
import com.revature.allergyservice.model.Allergy;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@AllArgsConstructor
@Log4j2
public class AllergyService {
	
	private final AllergyDao allergyDao;

	public List<Allergy> getAllAllergies() throws RetreivalFailedException, AllergyServiceException {
		
		try {
		
		return allergyDao.getAllAllergies();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new AllergyServiceException("Unable to get allergy List");
		}
		
		
	}

	public Allergy getAllergy(long id) throws RetreivalFailedException, AllergyServiceException {
		try {
		return allergyDao.getAllergy(id).get();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new AllergyServiceException("Unable to get the allergy");
		}
			
		
		
		
	}

}

package com.revature.physicianavailabilityservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.physicianavailabilityservice.dao.PhysicianAvailabilityDao;
import com.revature.physicianavailabilityservice.dto.PhysicianAvailabilityRequest;
import com.revature.physicianavailabilityservice.dto.PhysicianAvailabilityResponse;
import com.revature.physicianavailabilityservice.service.exception.PhysicianAvailabilityServiceException;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@AllArgsConstructor
@Log4j2
public class PhysicianAvailabilityService {
	
	private final PhysicianAvailabilityDao physicianAvailabilityDao;

	public void createPhysicianAvailability(PhysicianAvailabilityRequest physicianAvailabilityRequest) throws PhysicianAvailabilityServiceException {
		try {
		physicianAvailabilityDao.createPhysicianAvailability(physicianAvailabilityRequest);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new PhysicianAvailabilityServiceException("Unable to add physicianavailability");
		}
		
	}

	public PhysicianAvailabilityResponse updatePhysicianAvailability(int id, PhysicianAvailabilityRequest physicianAvailabilityRequest) throws PhysicianAvailabilityServiceException {
		try {
		
		return physicianAvailabilityDao.updatePhysicianAvailability(id, physicianAvailabilityRequest);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new PhysicianAvailabilityServiceException("Unable to update the physician availability");
			
		}
	}

	public List<PhysicianAvailabilityResponse> getAllPhysicianAvailability() throws PhysicianAvailabilityServiceException {
		try {
		return physicianAvailabilityDao.getAllPhysicianAvailability();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new PhysicianAvailabilityServiceException("Unable to get all physician availabilities");
			
		}
	}

	public List<PhysicianAvailabilityResponse> getPhysisicanByEmail(String email) throws PhysicianAvailabilityServiceException {
		try {
		
		return physicianAvailabilityDao.getPhysicianByEmail(email);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new PhysicianAvailabilityServiceException("Unable to get the physician availability");
			
		}
	}

	public List<PhysicianAvailabilityResponse> getAllAvailablePhysicians() throws PhysicianAvailabilityServiceException {
		try {
			
			return physicianAvailabilityDao.getAllAvailablePhysicians();
			}
			catch(Exception e) {
				log.error(e.getMessage());
				throw new PhysicianAvailabilityServiceException("No physicians are available");
				
			}
	}

	public void deletePhysicianAvailability(int id) throws PhysicianAvailabilityServiceException {
try {
			
			physicianAvailabilityDao.deletePhysicianAvailability(id);
			}
			catch(Exception e) {
				log.error(e.getMessage());
				throw new PhysicianAvailabilityServiceException("Unable to delete physician Availability");
				
			}
	}

}

package com.revature.physicianavailabilityservice.dao;

import java.util.List;

import org.springframework.stereotype.Component;

import com.revature.physicianavailabilityservice.dao.exception.CreationFailedException;
import com.revature.physicianavailabilityservice.dao.exception.DeleteFailedException;
import com.revature.physicianavailabilityservice.dao.exception.RetreivalFailedException;
import com.revature.physicianavailabilityservice.dao.exception.UpdateFailedException;
import com.revature.physicianavailabilityservice.dto.PhysicianAvailabilityRequest;
import com.revature.physicianavailabilityservice.dto.PhysicianAvailabilityResponse;
import com.revature.physicianavailabilityservice.model.PhysicianAvailability;
import com.revature.physicianavailabilityservice.repository.PhysicianAvailabilityRepository;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Component
@AllArgsConstructor
@Log4j2
public class PhysicianAvailabilityDao {
	private final PhysicianAvailabilityRepository physicianAvailabilityRepository;

	public void createPhysicianAvailability(PhysicianAvailabilityRequest physicianAvailabilityRequest) throws CreationFailedException {
		
		try {
		
		
		PhysicianAvailability physicianAvailability= PhysicianAvailability.builder()
				.date(physicianAvailabilityRequest.getDate())
				.availability(physicianAvailabilityRequest
				.isAvailability())
				.email(physicianAvailabilityRequest.getEmail())
				.build();
		
		
		physicianAvailabilityRepository.save(physicianAvailability);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new CreationFailedException("Unable to create a Physician Availability record");
		}
		
	}
	
	public PhysicianAvailabilityResponse updatePhysicianAvailability(int id, PhysicianAvailabilityRequest physicianAvailabilityRequest) throws UpdateFailedException {
		try {
			
			PhysicianAvailability  physicianAvailability= physicianAvailabilityRepository.findById(id).get();
			physicianAvailability.setDate(physicianAvailabilityRequest.getDate());
			physicianAvailabilityRepository.save(physicianAvailability);
			physicianAvailability= physicianAvailabilityRepository.findById(id).get();
			
			return PhysicianAvailabilityResponse.builder()
					.availability(physicianAvailability.isAvailability())
					.date(physicianAvailability.getDate())
					.email(physicianAvailabilityRequest.getEmail())
					.id(physicianAvailability.getId()).build();
			
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new UpdateFailedException("Unable to update record");
			
		}
		
		
	}

	public List<PhysicianAvailabilityResponse> getAllPhysicianAvailability() throws RetreivalFailedException {
		try {
		
		List<PhysicianAvailability> physicanAvailabilities = physicianAvailabilityRepository.findAll();
		
		return  physicanAvailabilities.stream().map(physicanAvailbility -> mapToPhysicianAvailabilityResponse(physicanAvailbility)).toList();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetreivalFailedException("Unable to retreive all records");
		}
	}

	private PhysicianAvailabilityResponse mapToPhysicianAvailabilityResponse(PhysicianAvailability physicianAvailability) {
		
		return PhysicianAvailabilityResponse.builder()
				.availability(physicianAvailability.isAvailability())
				.date(physicianAvailability.getDate())
				.email(physicianAvailability.getEmail())
				.id(physicianAvailability.getId())
				.build();
	}

	public List<PhysicianAvailabilityResponse> getPhysicianByEmail(String email) throws RetreivalFailedException {
		
		try {
		
		List<PhysicianAvailability> physicianAvailabilies = physicianAvailabilityRepository.getPhysicianAvailabilityByEmail(email);
		return physicianAvailabilies.stream().map(physicanAvailbility -> mapToPhysicianAvailabilityResponse(physicanAvailbility)).toList();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetreivalFailedException("Unable to retreive the record");
			
		}
	}

	public List<PhysicianAvailabilityResponse> getAllAvailablePhysicians() throws RetreivalFailedException {
		// TODO Auto-generated method stub
		try {
			
			List<PhysicianAvailability> physicanAvailabilities = physicianAvailabilityRepository.getAllAvailablePhysician(true);
			
			return  physicanAvailabilities.stream().map(physicanAvailbility -> mapToPhysicianAvailabilityResponse(physicanAvailbility)).toList();
			}
			catch(Exception e) {
				log.error(e.getMessage());
				throw new RetreivalFailedException("Unable to retreive all records");
			}
	}

	public void deletePhysicianAvailability(int id) throws DeleteFailedException {
       try {
			
			physicianAvailabilityRepository.deleteById(id);
			}
			catch(Exception e) {
				log.error(e.getMessage());
				throw new DeleteFailedException("Unable to retreive all records");
			}
	}

}

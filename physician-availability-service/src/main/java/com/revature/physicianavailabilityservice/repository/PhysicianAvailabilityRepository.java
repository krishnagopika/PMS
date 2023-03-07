package com.revature.physicianavailabilityservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.revature.physicianavailabilityservice.model.PhysicianAvailability;

public interface PhysicianAvailabilityRepository extends JpaRepository<PhysicianAvailability, Integer>{
	@Query(value = "Select * from physician_availability where availability=:availability", nativeQuery = true)
	List<PhysicianAvailability> getAllAvailablePhysician(@Param("availability") Boolean availability);
	@Query(value = "Select * from physician_availability where email=:email", nativeQuery = true)
	List<PhysicianAvailability> getPhysicianAvailabilityByEmail(@Param("email") String email);
	
	

}

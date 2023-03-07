package com.revature.authenticationservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.revature.authenticationservice.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer> {
	
	@Query(value = "Select * from patient where email=:email and password=:password", nativeQuery = true)
	Optional<Patient> authenticatePatient( @Param("email") String date, @Param("password") String password);
	

}

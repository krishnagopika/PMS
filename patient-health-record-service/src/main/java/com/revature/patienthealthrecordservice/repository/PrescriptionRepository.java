package com.revature.patienthealthrecordservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.revature.patienthealthrecordservice.model.Prescription;


public interface PrescriptionRepository extends JpaRepository<Prescription, Integer>{
	
	@Query(value = "Select * from prescription where visit_details_id=:visit_details_id ", nativeQuery = true)
	List<Prescription> getAllPrescriptionsByVistDetails( @Param("visit_details_id") int visit_details_id);

}

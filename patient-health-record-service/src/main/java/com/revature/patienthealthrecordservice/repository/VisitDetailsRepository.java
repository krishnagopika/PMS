package com.revature.patienthealthrecordservice.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.revature.patienthealthrecordservice.model.VisitDetails;

public interface VisitDetailsRepository extends JpaRepository<VisitDetails, Integer>{
	
	@Query(value = "SELECT * FROM visit_details WHERE patient_id=:patient_id ORDER BY id DESC LIMIT 1", nativeQuery = true)
	VisitDetails getRecentVisitDetails(@Param("patient_id") int patient_id);
	@Query(value = "SELECT * FROM visit_details WHERE patient_id=:patient_id ORDER BY id DESC", nativeQuery = true)
	List<VisitDetails> getAllVisitDetailsByPatientId(@Param("patient_id") int patient_id);
	@Query(value = "SELECT * FROM visit_details WHERE appointment_id=:appointment_id", nativeQuery = true)
	VisitDetails getVisitDetailsByAppointmentId(@Param("appointment_id") int appointment_id);


}

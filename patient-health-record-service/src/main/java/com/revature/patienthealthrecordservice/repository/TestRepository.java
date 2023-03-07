package com.revature.patienthealthrecordservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.revature.patienthealthrecordservice.model.Prescription;
import com.revature.patienthealthrecordservice.model.Test;
import com.revature.patienthealthrecordservice.model.VisitDetails;

public interface TestRepository extends JpaRepository<Test, Integer>{
	
	@Query(value = "Select * from test where visit_details_id=:visit_details_id ", nativeQuery = true)
	List<Test> getAllTestsByVisitDetailsID( @Param("visit_details_id") int visit_details_id);

	

}

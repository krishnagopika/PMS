package com.revature.patientinfoservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.patientinfoservice.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer>{

}

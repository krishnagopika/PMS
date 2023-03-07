package com.revature.allergyservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.allergyservice.model.Allergy;

public interface AllergyRepository extends JpaRepository<Allergy, Long>{

}

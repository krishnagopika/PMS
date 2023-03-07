package com.revature.allergyservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "allergy")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Allergy {
	
	@Id
	private long id;
	private String name;
	private String notes;
	
}

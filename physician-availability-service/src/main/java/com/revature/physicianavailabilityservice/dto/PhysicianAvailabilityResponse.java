package com.revature.physicianavailabilityservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class PhysicianAvailabilityResponse {
	private int id;
	private String email;
	private String[] date;
	private boolean availability;

}

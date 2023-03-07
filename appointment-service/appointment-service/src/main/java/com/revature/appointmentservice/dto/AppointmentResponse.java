package com.revature.appointmentservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentResponse {
	
	private int id;
	private String reason;
	private String date;
	private String submissionDate;
	private String acceptance;
	private int patientId;
	private String physicianEmail;

}

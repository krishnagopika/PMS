package com.revature.patienthealthrecordservice.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class VisitDetailsRequest {
	private int patient_id;
	private String date;
	private float height;
	private float weight;
	private int blood_pressure_systolic;
	private int blood_pressure_diastolic;
	private float body_temperature;
	private String blood_group;
	private int respiration_rate;
	private String physician_email;
	private String nurse_email;
	private int appointment_id;
	private String key_notes;
	private List<Integer> allergy;
}

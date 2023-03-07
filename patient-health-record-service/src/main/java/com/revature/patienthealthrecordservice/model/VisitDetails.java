package com.revature.patienthealthrecordservice.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "visit_details")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VisitDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int patient_id;
	private float height;
	private float weight;
	private String date;
	private int blood_pressure_systolic;
	private int blood_pressure_diastolic;
	private float body_temperature;
	private String blood_group;
	private int respiration_rate;
	private String physician_email;
	private String nurse_email;
	@Column(unique=true)
	private int appointment_id;
	private String key_notes;
	private List<Integer> allergy;
	

}

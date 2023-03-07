package com.revature.patienthealthrecordservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class PrescriptionResponse {
	private int id;
	private String name;
	private String dosage;
	private int visit_details_id;

}

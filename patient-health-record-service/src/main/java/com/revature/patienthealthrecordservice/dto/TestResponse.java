package com.revature.patienthealthrecordservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class TestResponse {
	private int id;
	private String name;
	private String result;
	private int visit_details_id;

}

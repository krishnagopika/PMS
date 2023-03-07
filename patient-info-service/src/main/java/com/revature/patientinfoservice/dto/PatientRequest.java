package com.revature.patientinfoservice.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PatientRequest {
	String email;
	String title;
	String firstName;
	String lastName;
	String dob;
	String contactNumber;
	String password;
	char gender;
	String address;

}

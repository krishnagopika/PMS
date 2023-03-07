package com.revature.authenticationservice.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
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
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "patient")
public class Patient {
	
	@Id()
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	@Column(unique=true)
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

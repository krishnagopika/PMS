package com.revature.patienthealthrecordservice.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

import com.revature.patienthealthrecordservice.dto.PrescriptionRequest;
import com.revature.patienthealthrecordservice.dto.PrescriptionResponse;
import com.revature.patienthealthrecordservice.dto.VisitDetailsResponse;
import com.revature.patienthealthrecordservice.service.PrescriptionService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/health-records/")
public class PrescriptionController {
	private final PrescriptionService prescriptionService;
	@GetMapping("public/patient/prescription")
	@ResponseStatus(HttpStatus.OK)
	public List<PrescriptionResponse> getAllPrescriptions(@RequestParam int visit_details_id)
	{
		try {
		return prescriptionService.getAllPrescriptions(visit_details_id);
		}
		catch(Exception e) {
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
	}
	@PostMapping("patient/prescription")
	@ResponseStatus(HttpStatus.CREATED)
	public String createPrescription(@RequestBody PrescriptionRequest prescriptionRequest) {
		try {
			prescriptionService.createPrescription(prescriptionRequest);
			return "Prescription Added Successfully";
			}
			catch(Exception e) {
				throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
			}
	}
	@PutMapping("patient/prescription/")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public PrescriptionResponse updatePrescription(@RequestBody PrescriptionRequest prescriptionRequest, @RequestParam int prescription_id) {
		try {
			return prescriptionService.updatePrescription(prescriptionRequest, prescription_id);
			
			}
			catch(Exception e) {
				throw new HttpClientErrorException(HttpStatusCode.valueOf(501));
			}
	}
	@DeleteMapping("patient/prescription/")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public PrescriptionResponse deletePrescription( @RequestParam int prescription_id) {
		try {
			return prescriptionService.deletePrescription(prescription_id);
			}
			catch(Exception e) {
				throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
			}
	}

}

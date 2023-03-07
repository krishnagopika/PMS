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
import com.revature.patienthealthrecordservice.dto.TestRequest;
import com.revature.patienthealthrecordservice.dto.TestResponse;
import com.revature.patienthealthrecordservice.dto.VisitDetailsResponse;
import com.revature.patienthealthrecordservice.service.TestService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/health-records/")
public class TestController {
	private final TestService testService;
	@GetMapping("public/patient/test/")
	@ResponseStatus(HttpStatus.OK)
	public List<TestResponse> getAllTests(@RequestParam int visit_details_id)
	{
		try {
		return testService.getAllTests(visit_details_id);
		}
		catch(Exception e) {
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
	}
	@PostMapping("patient/test")
	@ResponseStatus(HttpStatus.CREATED)
	public String createTest(@RequestBody TestRequest testRequest) {
		try {
			testService.createTest(testRequest);
			return "Prescription Added Successfully";
			}
			catch(Exception e) {
				throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
			}
	}
	@PutMapping("patient/test/")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public TestResponse updateTest(@RequestBody TestRequest testRequest, @RequestParam int test_id) {
		try {
			return testService.updateTest(testRequest, test_id);
			
			}
			catch(Exception e) {
				throw new HttpClientErrorException(HttpStatusCode.valueOf(501));
			}
	}
	@DeleteMapping("patient/test/")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public TestResponse deleteTest( @RequestParam int test_id) {
		try {
			return testService.deleteTest(test_id);
			}
			catch(Exception e) {
				throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
			}
	}
	
	

}

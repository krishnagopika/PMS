package com.revature.patienthealthrecordservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.patienthealthrecordservice.dao.TestDao;
import com.revature.patienthealthrecordservice.dto.TestRequest;
import com.revature.patienthealthrecordservice.dto.TestResponse;
import com.revature.patienthealthrecordservice.service.exception.PrescriptionServiceException;
import com.revature.patienthealthrecordservice.service.exception.TestServiceException;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@AllArgsConstructor
@Log4j2
public class TestService {
	private final TestDao testDao;
	public List<TestResponse> getAllTests(int visit_details_id) throws TestServiceException {
		try {

		return testDao.getAllTests(visit_details_id);
		}
		catch (Exception e) {
			log.error(e.getMessage());
			throw new TestServiceException("Unable to get all tests");
			
		}
	}

	public void createTest(TestRequest testRequest) throws TestServiceException {
		try {
		testDao.createTest(testRequest);
		}
		catch (Exception e) {
			log.error(e.getMessage());
			throw new TestServiceException("Unable to create test");
			
		}
		
	}

	public TestResponse updateTest(TestRequest testRequest, int test_id) throws TestServiceException {
		try {

		return testDao.updateTest(testRequest,test_id);
		}
		catch (Exception e) {
			log.error(e.getMessage());
			throw new TestServiceException("Unable to update test");
			
		}
		
	}

	public TestResponse deleteTest(int test_id) throws TestServiceException {
		try {
		// TODO Auto-generated method stub
		return testDao.deleteTest(test_id);
		}
		catch (Exception e) {
			log.error(e.getMessage());
			throw new TestServiceException("Unable to delete test");
			
		}
		
	}

}

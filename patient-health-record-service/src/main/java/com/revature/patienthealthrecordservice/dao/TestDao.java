package com.revature.patienthealthrecordservice.dao;

import java.util.List;

import org.springframework.stereotype.Component;

import com.revature.patienthealthrecordservice.dao.exception.CreationFailedException;
import com.revature.patienthealthrecordservice.dao.exception.DeletionFailedException;
import com.revature.patienthealthrecordservice.dao.exception.RetreivalFailedException;
import com.revature.patienthealthrecordservice.dao.exception.UpdateFailedException;
import com.revature.patienthealthrecordservice.dto.TestRequest;
import com.revature.patienthealthrecordservice.dto.TestResponse;
import com.revature.patienthealthrecordservice.model.Test;
import com.revature.patienthealthrecordservice.repository.TestRepository;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Component
@AllArgsConstructor
@Log4j2
public class TestDao {
	private final TestRepository testRepository;

	public List<TestResponse> getAllTests(int visit_details_id) throws RetreivalFailedException {
		try {
		List<Test> tests = testRepository.getAllTestsByVisitDetailsID(visit_details_id);
		
		return tests.stream().map(test->mapToTestResponse(test)).toList();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetreivalFailedException("Unable to get all records");
			
		}
	}

	private TestResponse mapToTestResponse(Test test) {
		
		return TestResponse.builder()
				.name(test.getName())
				.result(test.getResult())
				.visit_details_id(test.getVisit_details_id())
				.id(test.getId())
				.build();
	}

	public void createTest(TestRequest testRequest) throws CreationFailedException {
		try {
		Test test = Test.builder()
				.name(testRequest.getName())
				.result(testRequest.getResult())
				.visit_details_id(testRequest.getVisit_details_id())
				.build();
		testRepository.save(test);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new CreationFailedException("Unable to create test record");
			
		}
		
		
	}

	public TestResponse updateTest(TestRequest testRequest, int test_id) throws UpdateFailedException {
		try {
		
		Test test = Test.builder()
				.name(testRequest.getName())
				.result(testRequest.getResult())
				.visit_details_id(testRequest.getVisit_details_id())
				.id(test_id)
				.build();
		testRepository.save(test);
		test = testRepository.findById(test.getId()).get();
		return TestResponse.builder()
				.name(test.getName())
				.result(test.getResult())
				.visit_details_id(test.getVisit_details_id())
				.id(test.getId())
				.build();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new UpdateFailedException("Unable to update test record");
			
		}
	}

	public TestResponse deleteTest(int test_id) throws DeletionFailedException {
		try {
		
		Test test = testRepository.findById(test_id).get();
		testRepository.delete(test);
		return TestResponse.builder()
				.name(test.getName())
				.result(test.getResult())
				.visit_details_id(test.getVisit_details_id())
				.id(test.getId())
				.build();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new DeletionFailedException("Unable to update test record");
			
		}
	}

}

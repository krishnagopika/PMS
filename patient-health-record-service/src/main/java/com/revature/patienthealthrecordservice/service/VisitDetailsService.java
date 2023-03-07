package com.revature.patienthealthrecordservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.patienthealthrecordservice.dao.VisitDetailsDao;
import com.revature.patienthealthrecordservice.dto.VisitDetailsRequest;
import com.revature.patienthealthrecordservice.dto.VisitDetailsResponse;
import com.revature.patienthealthrecordservice.service.exception.TestServiceException;
import com.revature.patienthealthrecordservice.service.exception.VisitDetailsServiceException;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@Service
@Log4j2
public class VisitDetailsService {
private final VisitDetailsDao visitDetailsDao;
	
	public void createVisitDetails(VisitDetailsRequest visitDetailsRequest) throws VisitDetailsServiceException {
		try {
		visitDetailsDao.createVisitDetails(visitDetailsRequest);
		}
		catch (Exception e) {
			log.error(e.getMessage());
			throw new VisitDetailsServiceException("Unable to add visit details");
			
		}
		
	}

	public VisitDetailsResponse updateVisitDetails(VisitDetailsRequest visitDetailsRequest, int visit_details_id) throws VisitDetailsServiceException {
		try {
		return visitDetailsDao.updateVisitDetails(visitDetailsRequest, visit_details_id);
		}
		catch (Exception e) {
			log.error(e.getMessage());
			throw new VisitDetailsServiceException("Unable to update visit details");
			
		}
	}

	public VisitDetailsResponse getRecentVisitDetails(int patient_id) throws VisitDetailsServiceException {
		try {
		
		return visitDetailsDao.getRecentVisitDetails(patient_id);
		}
		catch (Exception e) {
			log.error(e.getMessage());
			throw new VisitDetailsServiceException("Unable to get  visit details");
			
		}
	}


}

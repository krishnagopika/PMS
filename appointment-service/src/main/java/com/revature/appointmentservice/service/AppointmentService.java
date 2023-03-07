package com.revature.appointmentservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.appointmentservice.dao.AppointmentDAO;
import com.revature.appointmentservice.dao.exception.DeleteFailedException;
import com.revature.appointmentservice.dao.exception.RetrievalFailedException;
import com.revature.appointmentservice.dao.exception.UpdateFailedException;
import com.revature.appointmentservice.dto.AppointmentRequest;
import com.revature.appointmentservice.dto.AppointmentResponse;
import com.revature.appointmentservice.service.exception.AppointmentServiceException;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@RequiredArgsConstructor
@Log4j2
public class AppointmentService {
	
	private final AppointmentDAO appointmentDAO;
	
	public void createAppointment(AppointmentRequest appointmentCreation) throws AppointmentServiceException {
		try {
		
		appointmentDAO.createAppointment(appointmentCreation);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new AppointmentServiceException("Unable to create an appointment.");
		}
		
	}

	public List<AppointmentResponse> getAllAppointmentsOfPatient(int patient_id) throws AppointmentServiceException {
		try {
		
		return appointmentDAO.getAllAppointmentsOfPatient(patient_id);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new AppointmentServiceException("Unable to get the appointments");
		}
		
	}

	public AppointmentResponse getAppointment(int id) throws RetrievalFailedException, AppointmentServiceException {
		try {
		
		return appointmentDAO.getAppointment(id);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new AppointmentServiceException("Unable to get the appointment.");
		}
		
	}

	public AppointmentResponse deleteAppointment(int id) throws DeleteFailedException, AppointmentServiceException{
		
		try {
		return appointmentDAO.deleteAppointment(id);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new AppointmentServiceException("Unable to delete the appointment.");
		}
	}

	public AppointmentResponse updateAppointment(AppointmentRequest appointmentRequest, int  id) throws UpdateFailedException, AppointmentServiceException {
		
		try {
		return appointmentDAO.updateAppointment(appointmentRequest, id);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new AppointmentServiceException("Unable to update the appointment.");
		}
        
	}

	public List<AppointmentResponse> getAppointmentonsonDate(String date) throws AppointmentServiceException {
		
		
		try {
		return appointmentDAO.getAppointmentonsonDate(date);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new AppointmentServiceException("Unable to get the appointments.");
		}
	}

	public List<AppointmentResponse> getAllAppointmentsofAppointment(String date, String acceptance) throws AppointmentServiceException {
		try {
		
		return appointmentDAO.getAllAppointmentsofAppointment(date, acceptance);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new AppointmentServiceException("Unable to get the appointments.");
		}
	}

	public List<AppointmentResponse> getAllAppointmentsByPhysicianEmail(String email, String acceptance) throws AppointmentServiceException {
		try {
		return appointmentDAO.getAllAppointmentsByPhysicianEmail(email,acceptance);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new AppointmentServiceException("Unable to get the appointments.");
		}
	}

	public List<AppointmentResponse> getAllAppointmentsByPhysicianEmailAndDate(String email, String acceptance,
			String date) throws AppointmentServiceException {
		try {
		
		return appointmentDAO.getAllAppointmentsByPhysicianEmailAndDate(email,acceptance,date);
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new AppointmentServiceException("Unable to get the appointments.");
		}
	}


}

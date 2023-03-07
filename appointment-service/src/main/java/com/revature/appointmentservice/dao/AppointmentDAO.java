package com.revature.appointmentservice.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;

import com.revature.appointmentservice.dao.exception.CreationFailedException;
import com.revature.appointmentservice.dao.exception.DeleteFailedException;
import com.revature.appointmentservice.dao.exception.RetrievalFailedException;
import com.revature.appointmentservice.dao.exception.UpdateFailedException;
import com.revature.appointmentservice.dto.AppointmentRequest;
import com.revature.appointmentservice.dto.AppointmentResponse;
import com.revature.appointmentservice.model.Appointment;
import com.revature.appointmentservice.repository.AppointmentRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;


@RequiredArgsConstructor
@Component
@Log4j2
public class AppointmentDAO {
	
private final AppointmentRepository appointmentRepository;
	
	public void createAppointment(AppointmentRequest appointmentCreation) throws CreationFailedException {
		
		try {
		Appointment appointment = Appointment.builder()
				.reason(appointmentCreation.getReason())
				.date(appointmentCreation.getDate())
				.submissionDate(appointmentCreation.getSubmissionDate())
				.acceptance(appointmentCreation.getAcceptance())
				.patientId(appointmentCreation.getPatientId())
				.physicianEmail(appointmentCreation.getPhysicianEmail())
				.build();
		
		
			appointmentRepository.save(appointment);	
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new CreationFailedException("Unable to create an appointment Record");
		}
		
	}

	public List<AppointmentResponse> getAllAppointmentsOfPatient(int patient_id) throws RetrievalFailedException {
		
		try {
		List<Appointment> appointments = appointmentRepository.findAppointmentsByPatientId(patient_id);
		
		return appointments.stream().map(appointment -> mapToAppointmentResponse(appointment)).toList();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetrievalFailedException("Unable to retreive appointment Records");
		}
		
		
	}
	
	private AppointmentResponse mapToAppointmentResponse(Appointment appointment) {
		return AppointmentResponse.builder().id(appointment.getId())
				.reason(appointment.getReason())
				.date(appointment.getDate())
				.submissionDate(appointment.getSubmissionDate())
				.acceptance(appointment.getAcceptance())
				.patientId(appointment.getPatientId())
				.physicianEmail(appointment.getPhysicianEmail())
				.build();
	}

	public AppointmentResponse getAppointment(int id) throws RetrievalFailedException {
		
		try {
		
		Optional<Appointment> optionalAppointment = appointmentRepository.findById(id);
		
		if(optionalAppointment.isPresent()) {
		Appointment appointment = optionalAppointment.get();
		return AppointmentResponse.builder()
				.reason(appointment.getReason())
				.date(appointment.getDate())
				.submissionDate(appointment.getSubmissionDate())
				.acceptance(appointment.getAcceptance())
				.patientId(appointment.getPatientId())
				.physicianEmail(appointment.getPhysicianEmail())
				.id(appointment.getId())
				.build();
		}
		}
		catch(Exception exception) {
			throw new RetrievalFailedException("Record Does'nt exist");
		}
		return null;
		
	}

	public AppointmentResponse deleteAppointment(int id) throws DeleteFailedException {
		
		try {
		
		Optional<Appointment> optionalAppointment = appointmentRepository.findById(id);
		
		if(optionalAppointment.isPresent()) {
			Appointment appointment = optionalAppointment.get();
			appointmentRepository.deleteById(id);
			return AppointmentResponse.builder()
					.reason(appointment.getReason())
					.date(appointment.getDate())
					.submissionDate(appointment.getSubmissionDate())
					.acceptance(appointment.getAcceptance())
					.patientId(appointment.getPatientId())
					.physicianEmail(appointment.getPhysicianEmail())
					.id(appointment.getId())
					.build();
			}
		
		}
		catch(Exception e) {
			throw new DeleteFailedException("Unable to delete the record");
			
		}
		return null;
	}

	public AppointmentResponse updateAppointment(AppointmentRequest appointmentRequest, int  id) throws UpdateFailedException {
		
        
		
		    try {
			Appointment appointment = Appointment.builder()
					.reason(appointmentRequest.getReason())
					.date(appointmentRequest.getDate())
					.submissionDate(appointmentRequest.getSubmissionDate())
					.acceptance(appointmentRequest.getAcceptance())
					.patientId(appointmentRequest.getPatientId())
					.physicianEmail(appointmentRequest.getPhysicianEmail())
					.id(id)
					.build();
			
			appointmentRepository.save(appointment);
			
			Optional<Appointment> optionalAppointment = appointmentRepository.findById(id);
			
			appointment = optionalAppointment.get();
			return AppointmentResponse.builder()
					.reason(appointment.getReason())
					.date(appointment.getDate())
					.submissionDate(appointment.getSubmissionDate())
					.acceptance(appointment.getAcceptance())
					.patientId(appointment.getPatientId())
					.physicianEmail(appointment.getPhysicianEmail())
					.id(appointment.getId())
					.build();
		    }
		    catch(Exception e) {
		    	throw new UpdateFailedException("Unable to update the record");
		    }
	}
	
	

	public List<AppointmentResponse> getAppointmentonsonDate(String date) throws RetrievalFailedException {
		try {
		
		List<Appointment> appointments = appointmentRepository.findAppointmentsByDate(date);
		
		return appointments.stream().map(appointment -> mapToAppointmentResponse(appointment)).toList();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetrievalFailedException("Unable to retreive the Records");
		}
	}

	public List<AppointmentResponse> getAllAppointmentsofAppointment(String date, String acceptance) throws RetrievalFailedException {
		try {
        List<Appointment> appointments = appointmentRepository.findAppointmentsByDateAndAcceptance(date, acceptance);
		return appointments.stream().map(appointment -> mapToAppointmentResponse(appointment)).toList();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetrievalFailedException("Unable to retreive the Records");
		}
	}

	public List<AppointmentResponse> getAllAppointmentsByPhysicianEmail(String email, String acceptance) throws RetrievalFailedException {
		try {
		 List<Appointment> appointments = appointmentRepository.findAppointmentsByPhysicianEmail(email, acceptance);
		 return appointments.stream().map(appointment -> mapToAppointmentResponse(appointment)).toList();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetrievalFailedException("Unable to retreive the Records");
		}
	}

	public List<AppointmentResponse> getAllAppointmentsByPhysicianEmailAndDate(String email, String acceptance,
			String date) throws RetrievalFailedException {
		try {
		 List<Appointment> appointments = appointmentRepository.findAppointmentsByPhysicianEmailAndDate(email, acceptance, date);
		 return appointments.stream().map(appointment -> mapToAppointmentResponse(appointment)).toList();
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new RetrievalFailedException("Unable to retreive the Records");
		}
	}


}

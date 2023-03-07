package com.revature.appointmentservice.contoller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

import com.revature.appointmentservice.dao.exception.DeleteFailedException;
import com.revature.appointmentservice.dao.exception.RetrievalFailedException;
import com.revature.appointmentservice.dao.exception.UpdateFailedException;
import com.revature.appointmentservice.dto.AppointmentRequest;
import com.revature.appointmentservice.dto.AppointmentResponse;
import com.revature.appointmentservice.service.AppointmentService;
import com.revature.appointmentservice.service.exception.AppointmentServiceException;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/")
public class AppointmentController {

	private final AppointmentService appointmentService;

	@PostMapping("public/appointment")
	@ResponseStatus(HttpStatus.CREATED)
	public String createAppointment(@RequestBody AppointmentRequest appointmentRequest) {
		
		try {

		appointmentService.createAppointment(appointmentRequest);
		return "Appointment Placed Successfully";
		}
		catch(Exception e) {
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));			
		}
	}
	@PutMapping("appointment/")
	@ResponseStatus(HttpStatus.CREATED)
	public AppointmentResponse updateAppointment(@RequestParam int id, @RequestBody AppointmentRequest appointmentRequest ) throws UpdateFailedException, AppointmentServiceException {
       try {
		return appointmentService.updateAppointment(appointmentRequest, id);
       }
       catch(Exception e) {
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));			
		}
	}

	  @GetMapping("public/appointment/")
	  @ResponseStatus(HttpStatus.OK) 
	  public List<AppointmentResponse> getAllAppointmentsOfPatient(@RequestParam int patient_id){ 
		  try {
	  return appointmentService.getAllAppointmentsOfPatient(patient_id); 
		  }
		  catch(Exception e) {
				log.error(e.getMessage());
				throw new HttpClientErrorException(HttpStatusCode.valueOf(500));			
			}
	  }
	  
	  @GetMapping("appointment/id/")
	  @ResponseStatus(HttpStatus.FOUND) 
	  public AppointmentResponse getAppointment(@RequestParam int id) throws RetrievalFailedException, AppointmentServiceException{ 
	     try {
		  return appointmentService.getAppointment(id);
	     }
	     catch(Exception e) {
				log.error(e.getMessage());
				throw new HttpClientErrorException(HttpStatusCode.valueOf(500));			
			}
	  
	  }
	  
	  @DeleteMapping("public/appointment/")
	  @ResponseStatus(HttpStatus.OK) 
	  public AppointmentResponse deleteAppointment(@RequestParam int id) throws DeleteFailedException, AppointmentServiceException {
		  try {
		  return appointmentService.deleteAppointment(id);
		  }
		  catch(Exception e) {
				log.error(e.getMessage());
				throw new HttpClientErrorException(HttpStatusCode.valueOf(500));			
			}
		  
	  }
	  
	  @GetMapping("appointment/date/")
	  @ResponseStatus(HttpStatus.FOUND) 
	  public List<AppointmentResponse>  getAllAppointmentsonDate(@RequestParam String date){ 
		  try {
	  return appointmentService.getAppointmentonsonDate(date);
		  }
		  catch(Exception e) {
				log.error(e.getMessage());
				throw new HttpClientErrorException(HttpStatusCode.valueOf(500));			
			}
	  }
	  @GetMapping("appointment/acceptance/")
	  @ResponseStatus(HttpStatus.FOUND) 
	  public List<AppointmentResponse>  getAllAppointmentsofType(@RequestParam String date, @RequestParam String acceptance){ 
		  try {
	  return appointmentService.getAllAppointmentsofAppointment(date, acceptance);
		  }
		  catch(Exception e) {
				log.error(e.getMessage());
				throw new HttpClientErrorException(HttpStatusCode.valueOf(500));			
			}
	  
	  } 
	  @GetMapping("appointment/physician/")
	  @ResponseStatus(HttpStatus.FOUND) 
	  public List<AppointmentResponse>  getAllAppointmentsByPhysicianEmail(@RequestParam String email, @RequestParam String acceptance){ 
		  try {
	  return appointmentService.getAllAppointmentsByPhysicianEmail(email,acceptance);
		  }catch(Exception e) {
				log.error(e.getMessage());
				throw new HttpClientErrorException(HttpStatusCode.valueOf(500));			
			}
	  
	  } 
	  @GetMapping("appointment/date/physician/")
	  @ResponseStatus(HttpStatus.FOUND) 
	  public List<AppointmentResponse>  getAllAppointmentsByPhysicianEmailAndDate(@RequestParam String email, @RequestParam String acceptance, @RequestParam String date){ 
		  try {
	  return appointmentService.getAllAppointmentsByPhysicianEmailAndDate(email,acceptance, date);
		  }
		  catch(Exception e) {
				log.error(e.getMessage());
				throw new HttpClientErrorException(HttpStatusCode.valueOf(500));			
			}
	  
	  } 
	 

}

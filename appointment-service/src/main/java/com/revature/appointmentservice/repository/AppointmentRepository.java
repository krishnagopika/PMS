package com.revature.appointmentservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.revature.appointmentservice.model.Appointment;


public interface AppointmentRepository extends JpaRepository<Appointment, Integer>{
	@Query(value = "SELECT * FROM appointment a WHERE a.date =:date", 
			  nativeQuery = true)
	List<Appointment> findAppointmentsByDate( @Param("date") String date);
	@Query(value = "SELECT * FROM appointment a WHERE a.date =:date AND a.acceptance=:acceptance", 
			  nativeQuery = true)
	List<Appointment> findAppointmentsByDateAndAcceptance( @Param("date") String date, @Param("acceptance") String acceptance);
	@Query(value = "SELECT * FROM appointment a WHERE a.physician_email =:email AND a.acceptance=:acceptance", 
			  nativeQuery = true)
	List<Appointment> findAppointmentsByPhysicianEmail( @Param("email") String email, @Param("acceptance") String acceptance);
	@Query(value = "SELECT * FROM appointment a WHERE a.physician_email =:email AND a.acceptance=:acceptance AND a.date =:date", 
			  nativeQuery = true)
	List<Appointment> findAppointmentsByPhysicianEmailAndDate( @Param("email") String email, @Param("acceptance") String acceptance, @Param("date") String date );
	@Query(value = "SELECT * FROM appointment a WHERE a.patient_id =:patient_id", 
			  nativeQuery = true)
	List<Appointment> findAppointmentsByPatientId( @Param("patient_id") int patient_id);
}

package com.revature.appointmentservice.dao.exception;

public class AppointmentServiceDAOException extends Exception{
	public AppointmentServiceDAOException() {
		super();
	}
	public AppointmentServiceDAOException(String message) {
		super(message);
	}
	public AppointmentServiceDAOException(String message, Throwable cause) {
		super(message, cause);
	}
	public AppointmentServiceDAOException(Throwable cause) {
		super(cause);
	}
	protected AppointmentServiceDAOException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}

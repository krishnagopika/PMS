package com.revature.appointmentservice.service.exception;

public class AppointmentServiceException extends Exception{
	public AppointmentServiceException() {
		super();
	}
	public AppointmentServiceException(String message) {
		super(message);
	}
	public AppointmentServiceException(String message, Throwable cause) {
		super(message, cause);
	}
	public AppointmentServiceException(Throwable cause) {
		super(cause);
	}
	protected AppointmentServiceException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}

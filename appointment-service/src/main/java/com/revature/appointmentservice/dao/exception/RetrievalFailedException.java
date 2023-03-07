package com.revature.appointmentservice.dao.exception;

public class RetrievalFailedException extends AppointmentServiceDAOException{
	
	public RetrievalFailedException() {
		super();
	}
	public RetrievalFailedException(String message) {
		super(message);
	}
	public RetrievalFailedException(String message, Throwable cause) {
		super(message, cause);
	}
	public RetrievalFailedException(Throwable cause) {
		super(cause);
	}
	protected RetrievalFailedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}

package com.revature.appointmentservice.dao.exception;

public class UpdateFailedException extends AppointmentServiceDAOException{
	
	public UpdateFailedException() {
		super();
	}
	public UpdateFailedException(String message) {
		super(message);
	}
	public UpdateFailedException(String message, Throwable cause) {
		super(message, cause);
	}
	public UpdateFailedException(Throwable cause) {
		super(cause);
	}
	protected UpdateFailedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
	}

}

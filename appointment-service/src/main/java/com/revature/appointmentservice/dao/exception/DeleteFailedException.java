package com.revature.appointmentservice.dao.exception;

public class DeleteFailedException extends AppointmentServiceDAOException{
	public DeleteFailedException() {
		super();
	}
	public DeleteFailedException(String message) {
		super(message);
	}
	public DeleteFailedException(String message, Throwable cause) {
		super(message, cause);
	}
	public DeleteFailedException(Throwable cause) {
		super(cause);
	}
	protected DeleteFailedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}

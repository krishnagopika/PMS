package com.revature.appointmentservice.dao.exception;

public class DuplicateRecordException extends AppointmentServiceDAOException {
	public DuplicateRecordException() {
		super();
	}
	public DuplicateRecordException(String message) {
		super(message);
	}
	public DuplicateRecordException(String message, Throwable cause) {
		super(message, cause);
	}
	public DuplicateRecordException(Throwable cause) {
		super(cause);
	}
	protected DuplicateRecordException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}

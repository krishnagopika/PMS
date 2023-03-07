package com.revature.patienthealthrecordservice.service.exception;

public class HealthRecordServiceException extends Exception {
	public HealthRecordServiceException() {
		super();
	}
	public HealthRecordServiceException(String message) {
		super(message);
	}
	public HealthRecordServiceException(String message, Throwable cause) {
		super(message, cause);
	}
	public HealthRecordServiceException(Throwable cause) {
		super(cause);
	}
	protected HealthRecordServiceException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}

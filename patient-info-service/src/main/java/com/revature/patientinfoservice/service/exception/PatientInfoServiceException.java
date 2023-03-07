package com.revature.patientinfoservice.service.exception;

public class PatientInfoServiceException extends Exception {
	public PatientInfoServiceException() {
		super();
	}
	public PatientInfoServiceException(String message) {
		super(message);
	}
	public PatientInfoServiceException(String message, Throwable cause) {
		super(message, cause);
	}
	public PatientInfoServiceException(Throwable cause) {
		super(cause);
	}
	protected PatientInfoServiceException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }


}

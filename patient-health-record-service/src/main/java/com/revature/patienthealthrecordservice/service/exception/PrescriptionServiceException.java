package com.revature.patienthealthrecordservice.service.exception;

public class PrescriptionServiceException extends Exception{
	public PrescriptionServiceException() {
		super();
	}
	public PrescriptionServiceException(String message) {
		super(message);
	}
	public PrescriptionServiceException(String message, Throwable cause) {
		super(message, cause);
	}
	public PrescriptionServiceException(Throwable cause) {
		super(cause);
	}
	protected PrescriptionServiceException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}

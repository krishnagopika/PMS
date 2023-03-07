package com.revature.physicianavailabilityservice.service.exception;

public class PhysicianAvailabilityServiceException extends Exception {
	public PhysicianAvailabilityServiceException() {
		super();
	}
	public PhysicianAvailabilityServiceException(String message) {
		super(message);
	}
	public PhysicianAvailabilityServiceException(String message, Throwable cause) {
		super(message, cause);
	}
	public PhysicianAvailabilityServiceException(Throwable cause) {
		super(cause);
	}
	protected PhysicianAvailabilityServiceException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}

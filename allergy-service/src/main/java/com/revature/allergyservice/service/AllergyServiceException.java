package com.revature.allergyservice.service;

public class AllergyServiceException extends Exception{
	public AllergyServiceException() {
		super();
	}
	public AllergyServiceException(String message) {
		super(message);
	}
	public AllergyServiceException(String message, Throwable cause) {
		super(message, cause);
	}
	public AllergyServiceException(Throwable cause) {
		super(cause);
	}
	protected AllergyServiceException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}

package com.revature.patientinfoservice.dao.exception;

public class RetreivalFailedException extends Exception{
	public RetreivalFailedException() {
		super();
	}
	public RetreivalFailedException(String message) {
		super(message);
	}
	public RetreivalFailedException(String message, Throwable cause) {
		super(message, cause);
	}
	public RetreivalFailedException(Throwable cause) {
		super(cause);
	}
	public RetreivalFailedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}

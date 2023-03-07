package com.revature.physicianavailabilityservice.dao.exception;

public class UpdateFailedException extends Exception{
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

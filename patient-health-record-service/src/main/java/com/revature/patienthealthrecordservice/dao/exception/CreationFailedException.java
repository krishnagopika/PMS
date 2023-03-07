package com.revature.patienthealthrecordservice.dao.exception;

public class CreationFailedException extends Exception{
	public CreationFailedException() {
		super();
	}
	public CreationFailedException(String message) {
		super(message);
	}
	public CreationFailedException(String message, Throwable cause) {
		super(message, cause);
	}
	public CreationFailedException(Throwable cause) {
		super(cause);
	}
	protected CreationFailedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
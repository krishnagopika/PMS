package com.revature.patienthealthrecordservice.service.exception;

public class TestServiceException extends Exception{
	public TestServiceException() {
		super();
	}
	public TestServiceException(String message) {
		super(message);
	}
	public TestServiceException(String message, Throwable cause) {
		super(message, cause);
	}
	public TestServiceException(Throwable cause) {
		super(cause);
	}
	protected TestServiceException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }


}

package com.revature.patienthealthrecordservice.service.exception;

public class VisitDetailsServiceException extends Exception{
	public VisitDetailsServiceException() {
		super();
	}
	public VisitDetailsServiceException(String message) {
		super(message);
	}
	public VisitDetailsServiceException(String message, Throwable cause) {
		super(message, cause);
	}
	public VisitDetailsServiceException(Throwable cause) {
		super(cause);
	}
	protected VisitDetailsServiceException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }


}

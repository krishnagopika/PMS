package com.revature.patienthealthrecordservice.dao.exception;

public class DeletionFailedException extends Exception{
	public DeletionFailedException() {
		super();
	}
	public DeletionFailedException(String message) {
		super(message);
	}
	public DeletionFailedException(String message, Throwable cause) {
		super(message, cause);
	}
	public DeletionFailedException(Throwable cause) {
		super(cause);
	}
	protected DeletionFailedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}

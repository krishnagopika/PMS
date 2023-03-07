package com.revature.physicianavailabilityservice.dao.exception;

public class PhysicianAvailabilityDaoException extends Exception{
	public PhysicianAvailabilityDaoException() {
		super();
	}
	public PhysicianAvailabilityDaoException(String message) {
		super(message);
	}
	public PhysicianAvailabilityDaoException(String message, Throwable cause) {
		super(message, cause);
	}
	public PhysicianAvailabilityDaoException(Throwable cause) {
		super(cause);
	}
	protected PhysicianAvailabilityDaoException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}

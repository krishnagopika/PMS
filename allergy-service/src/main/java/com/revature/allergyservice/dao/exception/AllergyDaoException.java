package com.revature.allergyservice.dao.exception;

public class AllergyDaoException extends Exception{
	public AllergyDaoException() {
		super();
	}
	public AllergyDaoException(String message) {
		super(message);
	}
	public AllergyDaoException(String message, Throwable cause) {
		super(message, cause);
	}
	public AllergyDaoException(Throwable cause) {
		super(cause);
	}
	protected AllergyDaoException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}

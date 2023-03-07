package com.revature.authenticationservice.dao.exception;

public class AuthenticationServiceDaoException extends Exception{
	
	public AuthenticationServiceDaoException() {
		super();
	}
	public AuthenticationServiceDaoException(String message) {
		super(message);
	}
	public AuthenticationServiceDaoException(String message, Throwable cause) {
		super(message, cause);
	}
	public AuthenticationServiceDaoException(Throwable cause) {
		super(cause);
	}
	protected AuthenticationServiceDaoException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }


}

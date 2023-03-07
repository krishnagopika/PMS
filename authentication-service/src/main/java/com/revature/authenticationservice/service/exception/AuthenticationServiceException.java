package com.revature.authenticationservice.service.exception;

public class AuthenticationServiceException extends Exception{
	public AuthenticationServiceException() {
		super();
	}
	public AuthenticationServiceException(String message) {
		super(message);
	}
	public AuthenticationServiceException(String message, Throwable cause) {
		super(message, cause);
	}
	public AuthenticationServiceException(Throwable cause) {
		super(cause);
	}
	protected AuthenticationServiceException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }


}

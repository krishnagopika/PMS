package com.revature.patientinfoservice.dao.exception;

public class PatientServiceDaoException extends Exception{
	
	public PatientServiceDaoException() {
		super();
	}
	public PatientServiceDaoException(String message) {
		super(message);
	}
	public PatientServiceDaoException(String message, Throwable cause) {
		super(message, cause);
	}
	public PatientServiceDaoException(Throwable cause) {
		super(cause);
	}
	protected PatientServiceDaoException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }


}

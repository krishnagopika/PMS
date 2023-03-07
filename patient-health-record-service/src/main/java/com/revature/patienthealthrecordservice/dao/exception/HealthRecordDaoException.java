package com.revature.patienthealthrecordservice.dao.exception;

public class HealthRecordDaoException  extends Exception{
	public HealthRecordDaoException() {
		super();
	}
	public HealthRecordDaoException(String message) {
		super(message);
	}
	public HealthRecordDaoException(String message, Throwable cause) {
		super(message, cause);
	}
	public HealthRecordDaoException(Throwable cause) {
		super(cause);
	}
	protected HealthRecordDaoException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}

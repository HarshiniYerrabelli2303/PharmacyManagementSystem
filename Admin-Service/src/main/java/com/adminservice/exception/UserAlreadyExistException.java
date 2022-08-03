package com.adminservice.exception;

public class UserAlreadyExistException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UserAlreadyExistException() {
	}
	
	public UserAlreadyExistException(String message) {super(message);}
}

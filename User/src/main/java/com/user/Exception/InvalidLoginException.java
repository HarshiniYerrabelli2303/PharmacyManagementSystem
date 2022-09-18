package com.user.Exception;

public class InvalidLoginException extends RuntimeException {

	
	private static final long serialVersionUID = 1L;

	public InvalidLoginException() {
		
	}

	public InvalidLoginException(String message) {
		super(message);
		
	}
}

package com.drugservice.exception;

public class DrugsNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public DrugsNotFoundException() {}
	
	public DrugsNotFoundException(String message) {
		super(message);
	}

}

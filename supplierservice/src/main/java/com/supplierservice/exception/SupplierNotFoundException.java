package com.supplierservice.exception;

public class SupplierNotFoundException extends Exception
{
	
private static final long serialVersionUID = 1L;
	
	public SupplierNotFoundException() {}
	
	public SupplierNotFoundException(String message) {
		super(message);
	}

}

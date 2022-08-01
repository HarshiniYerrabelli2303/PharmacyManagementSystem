package com.doctorservice.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


@ControllerAdvice
public class DoctorExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(value = { UserNotFoundException.class })
	protected ResponseEntity<Object> handleConflict1(RuntimeException ex, WebRequest request) {
		String bodyOfResponse = "User with given id is not present";
		return handleExceptionInternal(ex, bodyOfResponse, new HttpHeaders(), HttpStatus.NOT_FOUND, request);
	}
	
	@ExceptionHandler(value = { UserAlreadyExistException.class })
	protected ResponseEntity<Object> handleConflict2(RuntimeException ex, WebRequest request) {
		String bodyOfResponse = "User with given email id  is already present";
		return handleExceptionInternal(ex, bodyOfResponse, new HttpHeaders(), HttpStatus.NOT_FOUND, request);
	}
}

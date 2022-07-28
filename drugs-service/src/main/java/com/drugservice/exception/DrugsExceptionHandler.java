package com.drugservice.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

public class DrugsExceptionHandler extends ResponseEntityExceptionHandler  {

	@ExceptionHandler(value = { DrugsNotFoundException.class })
	protected ResponseEntity<Object> handleConflict1(RuntimeException ex, WebRequest request) {
		String bodyOfResponse = "Drug with given id is not present";
		return handleExceptionInternal(ex, bodyOfResponse, new HttpHeaders(), HttpStatus.NOT_FOUND, request);
	}
}

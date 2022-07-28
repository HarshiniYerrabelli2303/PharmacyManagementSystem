package com.supplierservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/supplier")
public class supplierservice
{
	
	@GetMapping
	public String getSupplier()
	{
		return  "Hello Supplier";
	}

	
}

package com.supplierservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/supplier")
public class supplierservice
{
	
	@GetMapping
	public supplierservice getSupplier(supplierservice supplierservice)
	{
		return supplierservice ("Raj","raj@gmail.com","99999","Actone");
	}

	private supplierservice supplierservice(String string, String string2, String string3, String string4) {
		// TODO Auto-generated method stub
		return null;
	}

}

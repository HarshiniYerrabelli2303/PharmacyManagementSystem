package com.supplierservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.supplierservice.dto.Supplier;
import com.supplierservice.entity.SupplierEntity;
import com.supplierservice.exception.SupplierNotFoundException;
import com.supplierservice.implementation.SequenceGeneratorService;
import com.supplierservice.service.SupplierService;


@RestController
@RequestMapping("/supplier")
public class SupplierServiceController
{
	@Autowired
	private SupplierService service;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	@PostMapping("/createsupplier")
	public  ResponseEntity<?> createSupplier(@RequestBody Supplier supplier)
	{
		supplier.setId(sequenceGeneratorService.generateSequence(Supplier.SEQUENCE_NAME));
		String save=service.createSupplier(supplier);
		return  ResponseEntity.ok(save);
	}
	
	@GetMapping("/getsupplier/{byid}")
	public ResponseEntity<?> getbyIdSupplier(@PathVariable("byid") int id) throws SupplierNotFoundException{
		Supplier save=service.getSupplierById(id);
	return  ResponseEntity.ok(save);
		
	}
	
	@PutMapping("/updatesupplier/{byid}")
	public String updateSupplier(@PathVariable("byid") int id,@RequestBody Supplier supplier)
	{
		return service.updateSupplier(supplier,id);
	
	}
	
	@DeleteMapping("/deletesupplier/{byId}")
	public  ResponseEntity<?>deleteSupplier(@PathVariable("byId") int id) throws SupplierNotFoundException
	{
		String save=service.deleteSupplier(id);
		return ResponseEntity.ok(save);
	}
	
	@GetMapping("/getAllSupplier")
	public ResponseEntity<?> viewAllSupplier() throws SupplierNotFoundException{
		List<SupplierEntity> save=service.viewAllSupplier();
		return ResponseEntity.ok(save);
	}
	
}

package com.supplierservice.service;

import java.util.List;

import com.supplierservice.dto.Supplier;
import com.supplierservice.entity.SupplierEntity;
import com.supplierservice.exception.SupplierNotFoundException;

public interface SupplierService
{
    public String createSupplier(Supplier supplier);
	
	public String updateSupplier(Supplier supplier,int id);
	
	public String deleteSupplier(int id)throws SupplierNotFoundException;
	
	public Supplier getSupplierById(int id) throws SupplierNotFoundException;
	
	public List<SupplierEntity> viewAllSupplier();

	;
	

}

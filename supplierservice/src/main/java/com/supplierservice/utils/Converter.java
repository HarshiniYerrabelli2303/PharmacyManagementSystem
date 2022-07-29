package com.supplierservice.utils;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.supplierservice.dto.Supplier;
import com.supplierservice.entity.SupplierEntity;

@Component
public class Converter
{
	public SupplierEntity convertToSupplierEntity(Supplier supplier) {
		SupplierEntity supplierEntity=new SupplierEntity();
		
		BeanUtils.copyProperties(supplier, supplierEntity);
		
	
		return supplierEntity;
	}
	
	public Supplier convertToSupplierDto	(SupplierEntity supplierEntity) {
		Supplier suppliers=new Supplier();
		
		BeanUtils.copyProperties(supplierEntity, suppliers);
		
		return suppliers;
	}
	
	
}

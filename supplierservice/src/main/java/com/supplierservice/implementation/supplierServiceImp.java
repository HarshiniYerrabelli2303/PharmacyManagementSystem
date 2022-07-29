package com.supplierservice.implementation;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.supplierservice.dto.Supplier;
import com.supplierservice.entity.SupplierEntity;
import com.supplierservice.exception.SupplierNotFoundException;
import com.supplierservice.repository.SupplierRepository;
import com.supplierservice.service.SupplierService;
import com.supplierservice.utils.Converter;


@Service
public class supplierServiceImp implements SupplierService
{
	private static Logger logger=LoggerFactory.getLogger(supplierServiceImp.class);
	
	@Autowired
	public SupplierRepository supplierRepository;
	
	@Autowired
	private Converter convert;

	
	@Override
	public String createSupplier(Supplier supplier) {
		SupplierEntity suppliers=null;
		String message=null;
		suppliers=supplierRepository.save(convert.convertToSupplierEntity(supplier));
		if(suppliers!=null)
		{
			message="Supplier Added Successfully";
		}else {
			message="Unable to add the supplier";
		}
		return message;

		}
		
		

	@Override
	public String updateSupplier(Supplier supplier, int id) {
		String message=null;
		SupplierEntity suppliers=null;
		suppliers=supplierRepository.save(convert.convertToSupplierEntity(supplier));
		if(suppliers!=null)
		{
			 message="updated Successfull";
			 logger.info(message);
		}
		else {
			message="update not Successfull";
			 logger.error(message);
			
		}
		return message;
	}
	
	
	@Override
	public String deleteSupplier(int id) throws SupplierNotFoundException {
		String message=null;
		Optional<SupplierEntity> supplierEntity = supplierRepository.findById(id);
		if(supplierEntity.isPresent()) {
			supplierRepository.deleteById(id);
			message="Deleted Successfully";
			logger.info(message);
		}
		else {
			 message="supplier Not found";
			logger.error(message);
		}
			return message;
	}
	

	
	@Override
	public Supplier getSupplierById(int id) throws SupplierNotFoundException {
		
		Optional<SupplierEntity> supplierEntity = supplierRepository.findById(id);
		SupplierEntity supplierRecord=null;
		Supplier supplierdto=null;
		if(supplierEntity.isPresent()) {
			supplierRecord=supplierEntity.get();
			 supplierdto=convert.convertToSupplierDto(supplierRecord);	
		}
		else {
			logger.error("User Not Found");
			
		}
		return supplierdto;
	}

	@Override
	public List<SupplierEntity> viewAllSupplier() {
		
		 return supplierRepository.findAll();
	}

	



	



	




	

	

}

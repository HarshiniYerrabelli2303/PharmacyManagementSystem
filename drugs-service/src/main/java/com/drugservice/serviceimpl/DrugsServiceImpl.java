package com.drugservice.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drugservice.dto.Drugs;
import com.drugservice.entity.DrugsEntity;
import com.drugservice.exception.DrugsNotFoundException;
import com.drugservice.repository.DrgusRepository;
import com.drugservice.service.DrugsService;
import com.drugservice.utils.Converter;

@Service
public class DrugsServiceImpl implements DrugsService {
	
	private static Logger logDoctor=LoggerFactory.getLogger(DrugsServiceImpl.class);
	
	@Autowired
	private DrgusRepository drugsRepo;
	
	@Autowired
	private Converter convert;

	@Override
	public String AddDrugs(Drugs drug) {
		DrugsEntity drugs=null;
		String message=null;
		drugs= drugsRepo.save(convert.convertToDrugsEntity(drug));
		if(drugs!=null) {
			message="Drugs Added Successfully";
		}else {
			message="Unable to add the drugs";
		}
		return message;
	}

	@Override
	public String UpdateDrugs(Drugs drug,int drugId) {
		String message=null;
		
		Optional<DrugsEntity> drugsEntity = drugsRepo.findById(drugId);
		
		 if(drugsEntity.isPresent()) {
			drugsRepo.save(convert.convertToDrugsEntity(drug));
			 message="update Successfull";
			 logDoctor.info(message);
		 }else {
			 message="update not Successfull";
			 logDoctor.error(message);
		 }
		 return message;
	}

	@Override
	public String DeleteDrugs(int drugId)throws DrugsNotFoundException {
		String message=null;
		Optional<DrugsEntity> drugsEntity = drugsRepo.findById(drugId);
		if(drugsEntity.isPresent()) {
			drugsRepo.deleteById(drugId);
			message="Deleted Successfully";
			logDoctor.info(message);
		}
		else {
			 message="drug Not found";
			logDoctor.error(message);
			
		}
		return message;
	}

	@Override
	public Drugs viewDrugsById(int drugId)throws DrugsNotFoundException {
		Optional<DrugsEntity> drugsEntity = drugsRepo.findById(drugId);
		DrugsEntity drugRecord=null;
		Drugs drugdto=null;
		if(drugsEntity.isPresent()) {
			drugRecord=drugsEntity.get();
			 drugdto=convert.convertToDrugsDto(drugRecord);	
		}
		else {
			logDoctor.error("User Not Found");
			
		}
		return drugdto;
	}

	@Override
	public List<DrugsEntity> viewAllDrugs() {
		return drugsRepo.findAll();
	}

	

}

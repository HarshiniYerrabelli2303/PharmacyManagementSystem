package com.drugservice.service;

import java.util.List;

import com.drugservice.dto.Drugs;
import com.drugservice.entity.DrugsEntity;
import com.drugservice.exception.DrugsNotFoundException;

public interface DrugsService {

	public String AddDrugs(Drugs drug);
	
	public String UpdateDrugs(Drugs drug,int drugId);
	
	public String DeleteDrugs(int drugId)throws DrugsNotFoundException;
	
	public Drugs viewDrugsById(int drugId) throws DrugsNotFoundException;
	
	public List<DrugsEntity> viewAllDrugs();
	

}

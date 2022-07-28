package com.drugservice.utils;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.drugservice.dto.Drugs;
import com.drugservice.entity.DrugsEntity;

@Component
public class Converter {

	public DrugsEntity convertToDrugsEntity(Drugs drugs) {
		DrugsEntity drugsEntity=new DrugsEntity();
		
		BeanUtils.copyProperties(drugs, drugsEntity);
		
	
		return drugsEntity;
	}
	
	//DrugsEntity to DrugsDto
	public Drugs convertToDrugsDto	(DrugsEntity drugsEntity) {
		Drugs drugs=new Drugs();
		
		BeanUtils.copyProperties(drugsEntity, drugs);
		
		return drugs;
	}
}

package com.drugservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drugservice.dto.Drugs;
import com.drugservice.entity.DrugsEntity;
import com.drugservice.exception.DrugsNotFoundException;
import com.drugservice.service.DrugsService;
import com.drugservice.serviceimpl.SequenceGeneratorService;

@RestController
@RequestMapping("/drugs")
public class DrugsController {

	@Autowired
	private DrugsService drugsService;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	@PostMapping("/addDrug")
	public String AddDrugs(@RequestBody Drugs drug){
		drug.setDrugId(sequenceGeneratorService.generateSequence(Drugs.SEQUENCE_NAME));
		return  drugsService.AddDrugs(drug);
		
	}
	
	@PutMapping("/editDrug/{drugId}")
	public String editDrugs(@PathVariable("drugId") int drugId,@RequestBody Drugs drug){
		return drugsService.UpdateDrugs(drug,drugId);
		
	}
	
	@DeleteMapping("/deleteDrug/{drugId}")
	public String DeleteDrugs(@PathVariable("drugId") int drugId) throws DrugsNotFoundException{
		return drugsService.DeleteDrugs(drugId);
		
	}
	
	@GetMapping("/getDrug/{drugId}")
	public Drugs getDrugs(@PathVariable("drugId") int drugId) throws DrugsNotFoundException{
		return drugsService.viewDrugsById(drugId);
		
	}
	
	@GetMapping("/getAllDrug")
	public List<DrugsEntity> getAllDrugs() throws DrugsNotFoundException{
		return drugsService.viewAllDrugs();
		 
	}
}

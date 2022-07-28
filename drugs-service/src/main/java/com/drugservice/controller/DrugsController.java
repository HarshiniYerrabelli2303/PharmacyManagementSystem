package com.drugservice.controller;

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

import com.drugservice.dto.Drugs;
import com.drugservice.entity.DrugsEntity;
import com.drugservice.exception.DrugsNotFoundException;
import com.drugservice.service.DrugsService;

@RestController
@RequestMapping("/drugs")
public class DrugsController {

	@Autowired
	private DrugsService drugsService;
	
	@PostMapping("/addDrug")
	public ResponseEntity<?> AddDrugs(@RequestBody Drugs drug){
		String save=drugsService.AddDrugs(drug);
		return ResponseEntity.ok(save);
	}
	
	@PutMapping("/editDrug/{drugId}")
	public ResponseEntity<?> editDrugs(@PathVariable("drugId") int drugId,@RequestBody Drugs drug){
		String save=drugsService.UpdateDrugs(drug,drugId);
		return ResponseEntity.ok(save);
	}
	
	@DeleteMapping("/deleteDrug/{drugId}")
	public ResponseEntity<?> DeleteDrugs(@PathVariable("drugId") int drugId) throws DrugsNotFoundException{
		String save=drugsService.DeleteDrugs(drugId);
		return ResponseEntity.ok(save);
	}
	
	@GetMapping("/getDrug/{drugId}")
	public ResponseEntity<?> getDrugs(@PathVariable("drugId") int drugId) throws DrugsNotFoundException{
		Drugs save=drugsService.viewDrugsById(drugId);
		return ResponseEntity.ok(save);
	}
	
	@GetMapping("/getAllDrug")
	public ResponseEntity<?> getAllDrugs() throws DrugsNotFoundException{
		List<DrugsEntity> save=drugsService.viewAllDrugs();
		return ResponseEntity.ok(save);
	}
}

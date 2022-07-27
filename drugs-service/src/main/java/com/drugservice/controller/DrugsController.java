package com.drugservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drugservice.dto.Drugs;

@RestController
@RequestMapping("/drugs")
public class DrugsController {

	@GetMapping
	public Drugs getDrugs(Drugs drug) {
		return new Drugs("suplier@gmail.com","Acetone",100,01,356.0);
	}
}

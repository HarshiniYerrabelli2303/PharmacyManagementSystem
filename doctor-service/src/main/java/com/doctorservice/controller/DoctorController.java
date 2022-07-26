package com.doctorservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.doctorservice.dto.Doctor;
import com.doctorservice.entity.DoctorEntity;
import com.doctorservice.exception.UserNotFoundException;
import com.doctorservice.service.DoctorService;

@RestController
@CrossOrigin(origins = "http://localhost", maxAge = 3600)
public class DoctorController {
	
	@Autowired
	private DoctorService doctorservice;
	
	@PostMapping(value ="/registerDoctor")
	public DoctorEntity registerDoctor(@RequestBody Doctor doctor) {
		return doctorservice.registerDoctor(doctor);
		
	}
	
	@PutMapping(value ="/editProfile")
	public DoctorEntity editProfile(@RequestBody Doctor doctor)throws UserNotFoundException{
		return doctorservice.editProfile(doctor);
		
	}
	@GetMapping(value = "/viewProfile/{id}")
	public Doctor viewProfile(@PathVariable("id")int userId)throws UserNotFoundException{
		return doctorservice.viewProfile(userId);
	}
	
	@DeleteMapping(value = "/deleteProfile/{id}")
	public String deleteProfile(@PathVariable("id")int userId)throws UserNotFoundException{
		return doctorservice.deleteProfile(userId);
	}

	@GetMapping(value = "/viewAllDoctors")
	public List<DoctorEntity> viewAllDoctors() {
		return doctorservice.viewAllDoctors();
	}
}

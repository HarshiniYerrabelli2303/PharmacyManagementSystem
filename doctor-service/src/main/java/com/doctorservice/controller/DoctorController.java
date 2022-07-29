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

import com.doctorservice.dto.DoctorDto;
import com.doctorservice.entity.Doctor;
import com.doctorservice.exception.UserAlreadyExistException;
import com.doctorservice.exception.UserNotFoundException;
import com.doctorservice.service.DoctorService;

@RestController
@RequestMapping("/doctors")
@CrossOrigin(origins = "http://localhost", maxAge = 3600)
public class DoctorController {
	
	
	@Autowired
	private DoctorService doctorService;
	
	@PostMapping(value ="/registerDoctor")
	public String registerDoctor(@RequestBody DoctorDto doctorDto) throws UserAlreadyExistException {
		return doctorService.doctorRegistration(doctorDto);
		
	}
	
	@PutMapping(value ="/editProfile")
	public String editProfile(@RequestBody DoctorDto doctorDto)throws UserNotFoundException{
		return doctorService.updateProfile(doctorDto);
		
	}
	@GetMapping(value = "/viewProfile/{id}")
	public DoctorDto viewProfile(@PathVariable("id")int userId)throws UserNotFoundException{
		return doctorService.viewProfile(userId);
	}
	
	@DeleteMapping(value = "/deleteProfile/{id}")
	public String deleteProfile(@PathVariable("id")int userId)throws UserNotFoundException{
		return doctorService.deleteProfile(userId);
	}

	@GetMapping(value = "/viewAllDoctors")
	public List<Doctor> viewAllDoctors() {
		return doctorService.viewAllDoctors();
	}
}

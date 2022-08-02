package com.doctorservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
import com.doctorservice.serviceimpl.SequenceGeneratorService;

@RestController
@RequestMapping("/doctors")
@CrossOrigin(origins = "http://localhost", maxAge = 3600)
public class DoctorController {
	
	
	@Autowired
	private DoctorService doctorService;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	
	@PostMapping(value ="/registerDoctor")
	public ResponseEntity<?> registerDoctor(@RequestBody DoctorDto doctorDto) throws UserAlreadyExistException {
		doctorDto.setUserId(sequenceGeneratorService.generateSequence(DoctorDto.SEQUENCE_NAME));
		String save=doctorService.doctorRegistration(doctorDto);
		return ResponseEntity.ok(save);
		
	}
	
	@PutMapping(value ="/editProfile/{id}")
	public ResponseEntity<?> editProfile(@PathVariable("id")int userId ,@RequestBody DoctorDto doctorDto)throws UserNotFoundException{
		String save=doctorService.updateProfile(doctorDto,userId);
		return ResponseEntity.ok(save);
		
	}
	@GetMapping(value = "/viewProfile/{id}")
	public ResponseEntity<?> viewProfile(@PathVariable("id")int userId)throws UserNotFoundException{
		DoctorDto view= doctorService.viewProfile(userId);
		return ResponseEntity.ok(view);
	}
	
	@DeleteMapping(value = "/deleteProfile/{id}")
	public ResponseEntity<?> deleteProfile(@PathVariable("id")int userId)throws UserNotFoundException{
		String message = doctorService.deleteProfile(userId);
		return ResponseEntity.ok(message);
	}

	@GetMapping(value = "/viewAllDoctors")
	public ResponseEntity<?> viewAllDoctors() {
		List<Doctor> viewAll = doctorService.viewAllDoctors();
		return ResponseEntity.ok(viewAll);
	}
}

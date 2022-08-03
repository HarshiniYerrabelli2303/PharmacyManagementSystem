package com.adminservice.controller;

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

import com.adminservice.dto.AdminDto;
import com.adminservice.exception.UserAlreadyExistException;
import com.adminservice.exception.UserNotFoundException;
import com.adminservice.service.AdminService;
import com.adminservice.serviceimpl.SequenceGeneratorService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost", maxAge = 3600)
public class AdminController {

	@Autowired
	private AdminService adminService;

	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@PostMapping(value = "/registerAdmin")
	public ResponseEntity<?> registerAdmin(@RequestBody AdminDto adminDto) throws UserAlreadyExistException {
		adminDto.setUserId(sequenceGeneratorService.generateSequence(AdminDto.SEQUENCE_NAME));
		String save = adminService.adminRegistration(adminDto);
		return ResponseEntity.ok(save);

	}

	@PutMapping(value = "/editProfile/{id}")
	public ResponseEntity<?> editProfile(@PathVariable("id") int userId, @RequestBody AdminDto adminDto)
			throws UserNotFoundException {
		String save = adminService.updateProfile(adminDto, userId);
		return ResponseEntity.ok(save);

	}

	@GetMapping(value = "/viewProfile/{id}")
	public ResponseEntity<?> viewProfile(@PathVariable("id") int userId) throws UserNotFoundException {
		AdminDto view = adminService.viewProfile(userId);
		return ResponseEntity.ok(view);
	}

	@DeleteMapping(value = "/deleteProfile/{id}")
	public ResponseEntity<?> deleteProfile(@PathVariable("id") int userId) throws UserNotFoundException {
		String message = adminService.deleteProfile(userId);
		return ResponseEntity.ok(message);
	}
}
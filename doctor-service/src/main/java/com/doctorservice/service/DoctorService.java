package com.doctorservice.service;

import java.util.List;

import com.doctorservice.dto.DoctorDto;
import com.doctorservice.entity.Doctor;
import com.doctorservice.exception.UserAlreadyExistException;
import com.doctorservice.exception.UserNotFoundException;

public interface DoctorService {

	public String doctorRegistration(DoctorDto doctor) throws UserAlreadyExistException;
	
	public List<Doctor> viewAllDoctors();
	
	public String updateProfile(DoctorDto doctor);
	
	public String deleteProfile(int userId)throws UserNotFoundException;
	
	public DoctorDto viewProfile(int userId)throws UserNotFoundException;
}

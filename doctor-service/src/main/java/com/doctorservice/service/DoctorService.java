package com.doctorservice.service;

import java.util.List;

import com.doctorservice.dto.Doctor;
import com.doctorservice.entity.DoctorEntity;
import com.doctorservice.exception.UserNotFoundException;

public interface DoctorService {
	
	
	public DoctorEntity registerDoctor(Doctor doctor);
	public DoctorEntity editProfile(Doctor doctor)throws UserNotFoundException;
	public Doctor viewProfile(int userId)throws UserNotFoundException;
	public String deleteProfile(int userId)throws UserNotFoundException;
	public List<DoctorEntity> viewAllDoctors();
	
}

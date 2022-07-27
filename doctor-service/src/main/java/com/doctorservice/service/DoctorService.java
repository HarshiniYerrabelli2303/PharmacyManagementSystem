package com.doctorservice.service;

import java.util.List;

<<<<<<< HEAD
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
=======
import com.doctorservice.dto.Doctor;
import com.doctorservice.entity.DoctorEntity;
import com.doctorservice.exception.UserNotFoundException;

public interface DoctorService {
	
	
	public DoctorEntity registerDoctor(Doctor doctor);
	public DoctorEntity editProfile(Doctor doctor)throws UserNotFoundException;
	public Doctor viewProfile(int userId)throws UserNotFoundException;
	public String deleteProfile(int userId)throws UserNotFoundException;
	public List<DoctorEntity> viewAllDoctors();
	
>>>>>>> branch 'main' of https://github.com/HarshiniYerrabelli2303/PharmacyManagementSystem.git
}

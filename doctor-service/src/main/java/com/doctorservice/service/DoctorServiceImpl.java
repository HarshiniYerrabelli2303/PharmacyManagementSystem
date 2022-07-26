package com.doctorservice.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doctorservice.dto.Doctor;
import com.doctorservice.entity.DoctorEntity;
import com.doctorservice.exception.UserNotFoundException;
import com.doctorservice.repo.DoctorRepo;
import com.doctorservice.util.ConversionClass;


@Service
public class DoctorServiceImpl implements DoctorService {
	
	private static Logger logDoctor=LoggerFactory.getLogger(DoctorServiceImpl.class);
	@Autowired
	private ConversionClass convert;
	
	@Autowired
	private DoctorRepo doctorRepo;

	@Override
	public DoctorEntity registerDoctor(Doctor doctor) {
		
		return doctorRepo.save(convert.convertToDoctorEntity(doctor)) ;
	}

	@Override
	public DoctorEntity editProfile(Doctor doctor) throws UserNotFoundException {
		
		return doctorRepo.save(convert.convertToDoctorEntity(doctor)) ;
	}

	@Override
	public Doctor viewProfile(int userId) throws UserNotFoundException {
		
		Optional<DoctorEntity> doctorEntity = doctorRepo.findById(userId);
		DoctorEntity doctorRecord=null;
		Doctor dto=null;
		if(doctorEntity.isPresent()) {
			doctorRecord=doctorEntity.get();
			 dto=convert.convertToDoctor(doctorRecord);	
		}
		else {
			logDoctor.error("User Not Found");
			
		}
		return dto;
		
	}

	@Override
	public String deleteProfile(int userId) throws UserNotFoundException {
		String message=null;
		Optional<DoctorEntity> doctorEntity = doctorRepo.findById(userId);
		if(doctorEntity.isPresent()) {
			doctorRepo.deleteById(userId);
			message="Deleted Successfully";
			logDoctor.info(message);
		}
		else {
			 message="User Not found";
			logDoctor.error(message);
			
		}
		return message;
		
		
	}

	//to view All doctors
	@Override
	public List<DoctorEntity> viewAllDoctors() {
		
		return doctorRepo.findAll();
	}

}

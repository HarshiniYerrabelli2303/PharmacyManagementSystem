package com.doctorservice.serviceimpl;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doctorservice.dto.DoctorDto;
import com.doctorservice.entity.Doctor;
import com.doctorservice.exception.UserAlreadyExistException;
import com.doctorservice.exception.UserNotFoundException;
import com.doctorservice.repository.DoctorRepository;
import com.doctorservice.service.DoctorService;
import com.doctorservice.utils.Converter;

@Service
public class DoctorServiceImpl implements DoctorService {

	private static Logger logDoctor=LoggerFactory.getLogger(DoctorServiceImpl.class);
	@Autowired
	private DoctorRepository doctorRepo;
	
	@Autowired
	private Converter converter;
	
	@Override
	public String doctorRegistration(DoctorDto doctorDto) throws UserAlreadyExistException {
		String message=null;
		Doctor doctor=null;
		 if(this.doctorRepo.existsByEmail(doctorDto.getEmail())) {
		        throw new UserAlreadyExistException("User with given Email already exist");
		 }
		 doctor=doctorRepo.save(converter.convertToDoctorEntity(doctorDto));
		 if(doctor!=null) {
		 message="register Successfull";
		 }else {
			 message="register not Successfull";
		 }
		 return message;
		
	}

	@Override
	public List<Doctor> viewAllDoctors() {
		return doctorRepo.findAll();
	}

	@Override
	public String updateProfile(DoctorDto doctorDto) {
		String message=null;
		Doctor doctor=null;
		 doctor=doctorRepo.save(converter.convertToDoctorEntity(doctorDto));
		 if(doctor!=null) {
			 message="update Successfull";
			 logDoctor.info(message);
		 }else {
			 message="update not Successfull";
			 logDoctor.error(message);
		 }
		 return message;
	}

	@Override
	public String deleteProfile(int userId)throws UserNotFoundException {
		String message=null;
		Optional<Doctor> doctorEntity = doctorRepo.findById(userId);
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

	@Override
	public DoctorDto viewProfile(int userId)throws UserNotFoundException {
		Optional<Doctor> doctorEntity = doctorRepo.findById(userId);
		Doctor doctorRecord=null;
		DoctorDto dto=null;
		if(doctorEntity.isPresent()) {
			doctorRecord=doctorEntity.get();
			 dto=converter.convertToDoctorDto(doctorRecord);	
		}
		else {
			logDoctor.error("User Not Found");
			
		}
		return dto;
	}

}

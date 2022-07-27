package com.doctorservice.utils;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.doctorservice.dto.DoctorDto;
import com.doctorservice.entity.Doctor;

@Component
public class Converter {

	public Doctor convertToDoctorEntity(DoctorDto doctorDto) {
		Doctor doctor=new Doctor();
		
		BeanUtils.copyProperties(doctorDto, doctor);
		
	
		return doctor;
	}
	
	//customerEntity to customerDto
	public DoctorDto convertToDoctorDto	(Doctor doctor) {
		DoctorDto doctorDto=new DoctorDto();
		
		BeanUtils.copyProperties(doctor, doctorDto);
		
		return doctorDto;
	}
}

package com.doctorservice.util;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.doctorservice.dto.Doctor;
import com.doctorservice.entity.DoctorEntity;


@Component
public class ConversionClass {

	public DoctorEntity convertToDoctorEntity(Doctor doctor)
	{
		DoctorEntity doctorentity=new DoctorEntity();
		BeanUtils.copyProperties(doctor, doctorentity);
		return doctorentity;
		
	}
	public Doctor convertToDoctor(DoctorEntity doctorentity)
	{
		Doctor doctor=new Doctor();
		BeanUtils.copyProperties( doctorentity, doctor);
		return doctor;
		
	}
	
}

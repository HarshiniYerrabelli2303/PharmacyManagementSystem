package com.doctorservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.doctorservice.entity.Doctor;


@Repository
public interface DoctorRepository extends JpaRepository<Doctor,Integer>{

	boolean existsByEmail(String email);

}

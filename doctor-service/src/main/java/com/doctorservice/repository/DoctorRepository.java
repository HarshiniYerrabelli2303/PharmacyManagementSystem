package com.doctorservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.doctorservice.entity.Doctor;

@Repository
public interface DoctorRepository extends MongoRepository<Doctor, Integer> {

	boolean existsByEmail(String email);

}

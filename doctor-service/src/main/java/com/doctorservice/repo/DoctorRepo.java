package com.doctorservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.doctorservice.entity.DoctorEntity;

@Repository
public interface DoctorRepo extends JpaRepository<DoctorEntity, Integer> {

}

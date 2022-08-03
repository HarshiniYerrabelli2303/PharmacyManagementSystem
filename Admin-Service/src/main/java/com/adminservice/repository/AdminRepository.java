package com.adminservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.adminservice.entity.Admin;

@Repository
public interface AdminRepository extends MongoRepository<Admin, Integer> {

	boolean existsByEmail(String email);

}

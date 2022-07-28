package com.drugservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.drugservice.entity.DrugsEntity;

@Repository
public interface DrgusRepository extends MongoRepository<DrugsEntity ,Integer> {

}

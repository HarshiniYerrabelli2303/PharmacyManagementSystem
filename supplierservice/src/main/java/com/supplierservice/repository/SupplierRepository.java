package com.supplierservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.supplierservice.entity.SupplierEntity;
@Repository
public interface SupplierRepository extends MongoRepository<SupplierEntity,Integer>
{

}

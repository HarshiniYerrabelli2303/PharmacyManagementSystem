package com.user.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.user.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {

	public boolean existsByUserName(String username );
	
	User findByUserName(String username);

	public User findByUserNameAndPassword(String userName, String password);

}

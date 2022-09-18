package com.user.service;

import java.util.List;
import java.util.Map;

import com.user.Exception.InvalidLoginException;
import com.user.Exception.UserAlreadyExistException;
import com.user.Exception.UserNotFoundException;
import com.user.model.User;

public interface UserService {


	public User userRegistration(User user) throws UserAlreadyExistException;
	
	public User updateProfile(User user, int userId);
	
	public Map<String,Boolean> deleteProfile(int userId)throws UserNotFoundException;
	
	public User viewProfile(int userId)throws UserNotFoundException;
	public User viewProfileByName(String userName)throws UserNotFoundException;

	public List<User> viewAllUsers();
	
	public User getUserByUsername(String username)throws UserNotFoundException; 
	
	public User validateUser(String userName, String password )throws InvalidLoginException;
	
	//public List<User> getUserByRole(String role);
	
}

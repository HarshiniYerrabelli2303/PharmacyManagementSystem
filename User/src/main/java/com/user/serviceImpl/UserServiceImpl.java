package com.user.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.Exception.InvalidLoginException;
import com.user.Exception.UserAlreadyExistException;
import com.user.Exception.UserNotFoundException;
import com.user.model.User;
import com.user.repository.UserRepository;
import com.user.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	private static Logger logUser=LoggerFactory.getLogger(UserServiceImpl.class);
	@Autowired
	private UserRepository userRepo;
	

	@Override
	public User validateUser(String userName, String password) throws InvalidLoginException{
		System.out.println(userName +""+password );
		User opUser=userRepo.findByUserNameAndPassword(userName ,password);
		User user=null;
		if(opUser==null)
		{
			logUser.error("Invalid User");
			throw new InvalidLoginException("Invalid User");
		}
		else
		{
			user=opUser;
		}
		return user;
	}
	@Override
	public User userRegistration(User user) throws UserAlreadyExistException {
		if(this.userRepo.existsByUserName(user.getUserName()))
			 {
			logUser.error("Username already exist");        
			throw new UserAlreadyExistException("Username already exist");
			 }
			 return userRepo.save(user);
	}

	@Override
	public User updateProfile(User user, int userId) {
		User update=userRepo.findById(userId).orElseThrow(()->
		new UserNotFoundException("User not found"));
		update.setFirstName(user.getFirstName());
		update.setLastName(user.getLastName());
		update.setEmail(user.getEmail());
		update.setPassword(user.getPassword());
		update.setPhone(user.getPhone());
		update.setGender(user.getGender());
		update.setUserName(user.getUserName());
		update.setRole(user.getRole());
		
		return userRepo.save(update);
	}

	@Override
	public Map<String,Boolean> deleteProfile(int userId) throws UserNotFoundException {
		User user=userRepo.findById(userId).orElseThrow(()->
		new UserNotFoundException("User not found"));
		userRepo.delete(user);
		Map<String,Boolean> responce=new HashMap<>();
		responce.put("deleted", Boolean.TRUE);
		
		return responce;
	}

	@Override
	public User viewProfile(int userId) throws UserNotFoundException {
		
		return userRepo.findById(userId).orElseThrow(()->
		new UserNotFoundException("User not found"));
	}

	@Override
	public List<User> viewAllUsers() {
		//User user=new User();
		
		return userRepo.findAll();
	}

	@Override
	public User getUserByUsername(String username) throws UserNotFoundException {
		if(!userRepo.existsByUserName(username)) {
			throw new UserNotFoundException("user not found");
		}
		return userRepo.findByUserName(username);
	}
	@Override
	public User viewProfileByName(String userName) throws UserNotFoundException {
		User user=userRepo.findByUserName(userName);
		
		return user;
	}

}

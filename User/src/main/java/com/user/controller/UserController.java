package com.user.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.user.Exception.InvalidLoginException;
import com.user.Exception.UserAlreadyExistException;
import com.user.Exception.UserNotFoundException;
import com.user.model.User;
import com.user.repository.UserRepository;
import com.user.service.UserService;
import com.user.serviceImpl.SequenceGeneratorService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class UserController {
	
	@Autowired
	private UserService userService;
	
	private UserRepository userRepo;
	


	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;


	
	@PostMapping(value="/login")
	public String validate(@RequestBody User user) throws ServletException, InvalidLoginException{
		String jwtToken = "";

		if ( user.getUserName() == null || user.getPassword() == null) {
			throw new ServletException("Please fill all the feilds");
		}
		
		String userName = user.getUserName();
		String password = user.getPassword();

		user = userService.validateUser(userName, password);
		
		if (user == null) {
			throw new ServletException("User  not found.");
		}
		
		String secreteKey="PharmacyManagementSystemPharmacyManagementSystemPharmacyManagementSystem";
		jwtToken = Jwts.builder().setSubject(userName).claim("roles", "user").setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .signWith(SignatureAlgorithm.HS256,secreteKey ).compact();
		

		return jwtToken+"USERTYPE"+user.getRole();
	}
	
	@GetMapping("/message")
	public String loginSuccess() {
		return "Login Successful!";
	}
	
	@PostMapping(value = "/registerDoctor")
	@ApiOperation(value = "Register the doctor")
	public User registerDoctor(@RequestBody User user) throws UserAlreadyExistException {
		user.setUserId(sequenceGeneratorService.generateSequence(User.SEQUENCE_NAME));
		return userService.userRegistration(user);
		 
		
	}
	
	@PostMapping(value = "/register")
	@ApiOperation(value = "Register the Admin")
	public User register(@RequestBody User user) throws UserAlreadyExistException {
		user.setUserId(sequenceGeneratorService.generateSequence(User.SEQUENCE_NAME));
		return userService.userRegistration(user);
		 
		
	}
	
	@PutMapping(value="/updateProfile/{id}")
	public User updateProfile(@PathVariable("id") int userId ,@RequestBody User user)throws UserNotFoundException{
		return userService.updateProfile(user, userId);
		 
	
		
	}
	
	@GetMapping(value="/viewProfile/{id}")
	public User viewProfile(@PathVariable("id") int userId)throws UserNotFoundException{
		return userService.viewProfile(userId);
			
	}
	@GetMapping(value="/viewProfileByName/{userName}")
	public User viewProfileByName(@PathVariable("userName") String userName)throws UserNotFoundException{
		return userService.viewProfileByName(userName);
			
	}
	
	@GetMapping(value="/view/{username}")
	public User loadByUserName(@PathVariable("username")String username)throws UserNotFoundException{
		return userService.getUserByUsername(username);
	}
	
	@DeleteMapping(value = "/deleteUser/{id}")
	public Map<String,Boolean> deleteUser(@PathVariable("id") int userId)throws UserNotFoundException{
		
		return userService.deleteProfile(userId);
		
	}
	
	@GetMapping(value="/viewAll")
	public List<User> getAllUsers(){
		return userService.viewAllUsers();
	}

}

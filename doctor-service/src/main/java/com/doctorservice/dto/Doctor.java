package com.doctorservice.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import org.springframework.stereotype.Component;

@Component
public class Doctor {

	private int userId;
	
	@NotNull
	private String name;
	
	@NotNull
	private String contactNo;
	
	@NotNull
	@Email
	private String email;
	
	@NotNull
	private String password;

	public Doctor() {
		super();
	}

	public Doctor(int userId, @NotNull String name, @NotNull String contactNo, @NotNull @Email String email,
			@NotNull String password) {
		super();
		this.userId = userId;
		this.name = name;
		this.contactNo = contactNo;
		this.email = email;
		this.password = password;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Doctor [userId=" + userId + ", name=" + name + ", contactNo=" + contactNo + ", email=" + email
				+ ", password=" + password + "]";
	}
	
		
	
}

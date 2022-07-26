package com.doctorservice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
public class DoctorEntity {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	
	@NotNull
	private String name;
	
	@NotNull
	private String contactNo;
	
	@Email
	@NotNull
	private String email;
	
	@NotNull
	private String password;

	public DoctorEntity() {
		super();
	}

	public DoctorEntity(int userId, @NotNull String name, @NotNull String contactNo, @Email @NotNull String email,
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
		return "DoctorEntity [userId=" + userId + ", name=" + name + ", contactNo=" + contactNo + ", email=" + email
				+ ", password=" + password + "]";
	}
	
	
	
}

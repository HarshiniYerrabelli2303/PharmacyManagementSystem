package com.adminservice.service;

import com.adminservice.dto.AdminDto;
import com.adminservice.exception.UserAlreadyExistException;
import com.adminservice.exception.UserNotFoundException;

public interface AdminService {

	public String adminRegistration(AdminDto admin) throws UserAlreadyExistException;

	public String updateProfile(AdminDto admin, int userId);

	public String deleteProfile(int userId) throws UserNotFoundException;

	public AdminDto viewProfile(int userId) throws UserNotFoundException;

}

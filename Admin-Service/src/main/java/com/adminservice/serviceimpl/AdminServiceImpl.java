package com.adminservice.serviceimpl;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adminservice.dto.AdminDto;
import com.adminservice.entity.Admin;
import com.adminservice.exception.UserAlreadyExistException;
import com.adminservice.exception.UserNotFoundException;
import com.adminservice.repository.AdminRepository;
import com.adminservice.service.AdminService;
import com.adminservice.utils.Converter;

@Service
public class AdminServiceImpl implements AdminService {

	private static Logger logAdmin = LoggerFactory.getLogger(AdminServiceImpl.class);
	@Autowired
	private AdminRepository adminRepo;

	@Autowired
	private Converter converter;

	@Override
	public String adminRegistration(AdminDto adminDto) throws UserAlreadyExistException {
		String message = null;
		Admin admin = null;
		if (this.adminRepo.existsByEmail(adminDto.getEmail())) {
			throw new UserAlreadyExistException("User with given Email already exist");
		}
		admin = adminRepo.save(converter.convertToAdminEntity(adminDto));
		if (admin != null) {
			message = "register Successfull";
		} else {

			message = "register not Successfull";
			logAdmin.info(message);
		}
		return message;

	}

	@Override
	public String updateProfile(AdminDto adminDto, int userId) {
		String message = null;
		Admin admin = null;
		admin = adminRepo.save(converter.convertToAdminEntity(adminDto));
		if (admin != null) {
			message = "update Successfull";
			logAdmin.info(message);
		} else {
			message = "update not Successfull";
			logAdmin.error(message);
		}
		return message;
	}

	@Override
	public String deleteProfile(int userId) throws UserNotFoundException {
		String message = null;
		Optional<Admin> adminEntity = adminRepo.findById(userId);
		if (adminEntity.isPresent()) {
			adminRepo.deleteById(userId);
			message = "Deleted Successfully";
			logAdmin.info(message);
		} else {
			message = "User Not found";
			logAdmin.error(message);

		}
		return message;
	}

	@Override
	public AdminDto viewProfile(int userId) throws UserNotFoundException {
		Optional<Admin> adminEntity = adminRepo.findById(userId);
		Admin adminRecord = null;
		AdminDto dto = null;
		if (adminEntity.isPresent()) {
			adminRecord = adminEntity.get();
			dto = converter.convertToAdminDto(adminRecord);
		} else {
			logAdmin.error("User Not Found");

		}
		return dto;
	}

}

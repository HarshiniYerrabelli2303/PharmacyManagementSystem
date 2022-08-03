package com.adminservice.utils;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.adminservice.dto.AdminDto;
import com.adminservice.entity.Admin;

@Component
public class Converter {

	public Admin convertToAdminEntity(AdminDto adminDto) {
		Admin admin = new Admin();

		BeanUtils.copyProperties(adminDto, admin);

		return admin;
	}

	// From Entity to Dto
	public AdminDto convertToAdminDto(Admin admin) {
		AdminDto adminDto = new AdminDto();

		BeanUtils.copyProperties(admin, adminDto);

		return adminDto;
	}
}

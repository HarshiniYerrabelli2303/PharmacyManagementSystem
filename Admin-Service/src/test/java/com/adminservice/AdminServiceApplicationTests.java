package com.adminservice;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.stubbing.OngoingStubbing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.adminservice.entity.Admin;
import com.adminservice.repository.AdminRepository;
import com.adminservice.service.AdminService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminServiceApplicationTests {
  
	@Autowired
	private AdminService service;
	
	@MockBean
	private AdminRepository repository;
	

	@Test
	public void testRegisterAdmin() {
	Admin admin = new Admin();

	admin.setFirstName("raju");
	admin.setLastName("raju");
	admin.setEmail("raju12@gmail.com");
	admin.setPhone("9909890712");
	admin.setGender("Male");
	admin.setPassword("raju123");

	Mockito.when(AdminRepository.save(admin)).thenReturn(admin);
	}
		
	

	
}

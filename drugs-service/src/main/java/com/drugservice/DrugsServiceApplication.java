package com.drugservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class DrugsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(DrugsServiceApplication.class, args);
	}

}

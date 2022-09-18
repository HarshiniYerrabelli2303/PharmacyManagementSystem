package com.pharmacyapigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class PharmacyApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(PharmacyApiGatewayApplication.class, args);
	}

}
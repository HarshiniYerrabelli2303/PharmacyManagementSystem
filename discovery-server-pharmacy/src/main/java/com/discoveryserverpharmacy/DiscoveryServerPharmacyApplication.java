package com.discoveryserverpharmacy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class DiscoveryServerPharmacyApplication {

	public static void main(String[] args) {
		SpringApplication.run(DiscoveryServerPharmacyApplication.class, args);
	}

}
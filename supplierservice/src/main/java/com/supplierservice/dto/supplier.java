package com.supplierservice.dto;

public class supplier 
{
	private String supplierName;
	private String email;
	private String phoneNumber;
	private String drugName;
	public supplier() {
		super();
	}
	public supplier(String supplierName, String email, String phoneNumber, String drugName) {
		super();
		this.supplierName = supplierName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.drugName = drugName;
	}
	public String getSupplierName() {
		return supplierName;
	}
	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getDrugName() {
		return drugName;
	}
	public void setDrugName(String drugName) {
		this.drugName = drugName;
	}
	@Override
	public String toString() {
		return "supplier [supplierName=" + supplierName + ", email=" + email + ", phoneNumber=" + phoneNumber
				+ ", drugName=" + drugName + "]";
	}
	

}

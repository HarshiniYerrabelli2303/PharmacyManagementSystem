package com.supplierservice.dto;

public class Supplier
{
	public static final String SEQUENCE_NAME = "supplier_sequence";
    private int id;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	private String name;
	private String supplierEmail;
	private String contactNo;
	private String drugName;
	public Supplier() {
		super();
	}
	public Supplier(String name, String supplierEmail, String contactNo, String drugName) {
		super();
		this.name = name;
		this.supplierEmail = supplierEmail;
		this.contactNo = contactNo;
		this.drugName = drugName;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSupplierEmail() {
		return supplierEmail;
	}
	public void setSupplierEmail(String supplierEmail) {
		this.supplierEmail = supplierEmail;
	}
	public String getContactNo() {
		return contactNo;
	}
	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}
	public String getDrugName() {
		return drugName;
	}
	public void setDrugName(String drugName) {
		this.drugName = drugName;
	}
	@Override
	public String toString() {
		return "Supplier [id=" + id + ", name=" + name + ", supplierEmail=" + supplierEmail + ", contactNo=" + contactNo
				+ ", drugName=" + drugName + "]";
	}
	
	
	

}

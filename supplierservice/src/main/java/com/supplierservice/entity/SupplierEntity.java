package com.supplierservice.entity;
	

import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import nonapi.io.github.classgraph.json.Id;

@Document(collection="Supplier")

public class SupplierEntity
{	
	@Transient
    public static final String SEQUENCE_NAME = "supplier_sequence";
	
	@Id
	private int id;
	private String name;
	private String supplierEmail;
	private String contactNo;
	private String drugName;
	public SupplierEntity() {
		super();
	}
	public SupplierEntity(int id, String name, String supplierEmail, String contactNo, String drugName) {
		super();
		this.id = id;
		this.name = name;
		this.supplierEmail = supplierEmail;
		this.contactNo = contactNo;
		this.drugName = drugName;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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

package com.drugservice.dto;

import java.util.Date;

public class Drugs {

	private String suplierEmail;
	private String drugName;
	private int quantity;
	private int batchId;
	private Date expiredDate;
	private double price;
	
	public Drugs() {
		super();
	}

	
	public Drugs(String suplierEmail, String drugName, int quantity, int batchId, Date expiredDate, double price) {
		super();
		this.suplierEmail = suplierEmail;
		this.drugName = drugName;
		this.quantity = quantity;
		this.batchId = batchId;
		this.expiredDate = expiredDate;
		this.price = price;
	}


	public String getSuplierEmail() {
		return suplierEmail;
	}

	public void setSuplierEmail(String suplierEmail) {
		this.suplierEmail = suplierEmail;
	}

	public String getDrugName() {
		return drugName;
	}

	public void setDrugName(String drugName) {
		this.drugName = drugName;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Date getExpiredDate() {
		return expiredDate;
	}

	public void setExpiredDate(Date expiredDate) {
		this.expiredDate = expiredDate;
	}

	public int getBatchId() {
		return batchId;
	}

	public void setBatchId(int batchId) {
		this.batchId = batchId;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}


	@Override
	public String toString() {
		return "Drugs [suplierEmail=" + suplierEmail + ", drugName=" + drugName + ", quantity=" + quantity
				+ ", batchId=" + batchId + ", expiredDate=" + expiredDate + ", price=" + price + "]";
	}
	
	
	
}

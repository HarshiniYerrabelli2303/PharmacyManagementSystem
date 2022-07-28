package com.drugservice.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="drugs")
public class DrugsEntity {

	@Id
	private int drugId;
	private String suplierEmail;
	private String drugName;
	private int quantity;
	private int batchId;
	private Date expiredDate;
	private double price;
	
	
	public DrugsEntity() {
		super();
	}

	public DrugsEntity(String suplierEmail, String drugName, int quantity, int batchId, Date expiredDate,
			double price) {
		super();
		this.suplierEmail = suplierEmail;
		this.drugName = drugName;
		this.quantity = quantity;
		this.batchId = batchId;
		this.expiredDate = expiredDate;
		this.price = price;
	}

	public int getDrugId() {
		return drugId;
	}

	public void setDrugId(int drugId) {
		this.drugId = drugId;
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

	public int getBatchId() {
		return batchId;
	}

	public void setBatchId(int batchId) {
		this.batchId = batchId;
	}

	public Date getExpiredDate() {
		return expiredDate;
	}

	public void setExpiredDate(Date expiredDate) {
		this.expiredDate = expiredDate;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "DrugsEntity [drugId=" + drugId + ", suplierEmail=" + suplierEmail + ", drugName=" + drugName
				+ ", quantity=" + quantity + ", batchId=" + batchId + ", expiredDate=" + expiredDate + ", price="
				+ price + "]";
	}
	
	
	
}

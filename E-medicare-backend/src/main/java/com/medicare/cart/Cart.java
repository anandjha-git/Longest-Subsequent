package com.medicare.cart;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Cart {
	@Id
private int medicineId;
private String medicineName;
private int price;
private String description;
public int getMedicineId() {
	return medicineId;
}
public void setMedicineId(int medicineId) {
	this.medicineId = medicineId;
}
public String getMedicineName() {
	return medicineName;
}
public void setMedicineName(String medicineName) {
	this.medicineName = medicineName;
}
public int getPrice() {
	return price;
}
public void setPrice(int price) {
	this.price = price;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}



}

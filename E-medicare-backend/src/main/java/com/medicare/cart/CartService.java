package com.medicare.cart;

import java.util.List;

public interface CartService {
	void insertCart(Cart cart);
	void addToCart(Cart Citem);
	void deleteCart(int medicineId);
	List<Cart>getCart();
	//Cart findById(int medicineId);

}

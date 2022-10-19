package com.medicare.cart;
import java.util.List;

import org.springframework.stereotype.Service;
@Service
public class CartServiceImpl implements CartService {
private CartRepository cartRepository;
	

	public CartServiceImpl(CartRepository cartRepository) {
	super();
	this.cartRepository = cartRepository;
}

	@Override
	public void addToCart(Cart Citem) {
		cartRepository.save(Citem);
	}

	@Override
	public void deleteCart(int medicineId) {
	cartRepository.deleteById(medicineId);
		
	}

	@Override
	public List<Cart> getCart() {
		List<Cart> cart = cartRepository.findAll();
		return cart;
	}

	@Override
	public void insertCart(Cart cart) {
		cartRepository.save(cart);
		// TODO Auto-generated method stub
		
	} 

/*	@Override
	public Cart findById(int medicineId) {
		// TODO Auto-generated method stub
		Cart C = CartRepository.findByMedicineId(medicineId);
		return C;
	} */
}


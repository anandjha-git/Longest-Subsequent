package com.medicare.contactUs;

import java.util.List;

public interface ContactUsService {
	void insertMsg(ContactUs contactUs);
	List<ContactUs> getQueries();
}

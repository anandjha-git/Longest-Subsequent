package com.medicare.admin;

public interface AdminService {
	void insertAdmin(Admin admin);
	AdminAuthenticationStatus getAdminStatus(String admin,String password);

}

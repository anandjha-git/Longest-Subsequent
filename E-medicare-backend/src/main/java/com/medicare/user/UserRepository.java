package com.medicare.user;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository extends JpaRepository<User,Integer>{
User findByUsernameAndPassword(String username,String password );
List<User> findByUserId(String userId);
User findByUsername(String username);
}

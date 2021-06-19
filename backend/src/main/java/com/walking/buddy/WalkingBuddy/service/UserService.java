package com.walking.buddy.WalkingBuddy.service;

import com.walking.buddy.WalkingBuddy.model.User;
import com.walking.buddy.WalkingBuddy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserService {

    @Autowired
    UserRepository userRepository;
    public String userValidation(String email,String password){

        Optional<User> user=userRepository.findById(email);
        if(user.isPresent()){
            System.out.println(user.get().getEmail());
            if(password.equals(user.get().getPassword()))
                return "200";
            return "300";
        }
        return "404";


    }
}

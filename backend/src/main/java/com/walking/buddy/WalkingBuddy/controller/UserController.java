package com.walking.buddy.WalkingBuddy.controller;

import com.fasterxml.jackson.annotation.JsonValue;
import com.walking.buddy.WalkingBuddy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping(value="/signin")
    public ResponseEntity<?> authentication(@RequestHeader String email, @RequestHeader String password){
        return new ResponseEntity<String>( userService.userValidation(email,password),HttpStatus.OK);
    }

}

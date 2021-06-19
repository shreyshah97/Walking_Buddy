package com.walking.buddy.WalkingBuddy.repository;

import com.walking.buddy.WalkingBuddy.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public interface UserRepository extends MongoRepository<User, String> {

    public Optional<User> findByEmail(String Email);
}

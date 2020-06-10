package com.bezkoder.springjwt.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Course;
import com.bezkoder.springjwt.models.User;
import com.bezkoder.springjwt.repository.CourseRepo;
import com.bezkoder.springjwt.repository.UserRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
	@Autowired
	UserRepository userRepository;
	@Autowired
	CourseRepo repo;
	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
	
	@GetMapping("/user")
	@PreAuthorize("hasRole('STUDENT') or hasRole('FACULTY') or hasRole('ADMIN')")
	public String userAccess() {
		return "User Content.";
	}

	@GetMapping("/mod")
	@PreAuthorize("hasRole('FACULTY')")
	public String moderatorAccess() {
		return "Faculty Board.";
	}

	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return "Admin Board.";
	}
	
	@GetMapping("/admin/users")
	@PreAuthorize("hasRole('ADMIN')")
	public List<User> userslist() {
		return userRepository.findAll();
	}
	
	@PostMapping("/faculty/course/{id}")
	public String addcourse(@PathVariable long id,@RequestBody Course course) {
		User user = userRepository.findById(id);
		course.setUser(user);
		repo.save(course);
	
	return "course has been added successfully";
	
	}
}

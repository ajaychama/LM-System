package com.bezkoder.springjwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.springjwt.models.Course;

public interface CourseRepo extends JpaRepository<Course, Long>{

}

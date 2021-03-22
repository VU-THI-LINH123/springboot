package com.globits.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.globits.sample.domain.Employee;
@Repository
public interface EmployeeRepositiory extends  JpaRepository<Employee, Long> {

}

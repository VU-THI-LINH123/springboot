package com.globits.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.globits.sample.domain.Animal;
import com.globits.sample.domain.Employee1;
@Repository
public interface Employee1Repositiory extends JpaRepository<Employee1, Long>  {

}

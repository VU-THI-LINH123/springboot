package com.globits.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.globits.sample.domain.Animal;
import com.globits.sample.domain.Department1;
@Repository
public interface Department1Repository extends JpaRepository<Department1, Long> {

}

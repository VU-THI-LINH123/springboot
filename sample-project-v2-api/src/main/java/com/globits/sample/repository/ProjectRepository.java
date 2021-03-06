package com.globits.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.globits.sample.domain.Project;


@Repository
public interface ProjectRepository  extends  JpaRepository<Project, Long> {
   
}

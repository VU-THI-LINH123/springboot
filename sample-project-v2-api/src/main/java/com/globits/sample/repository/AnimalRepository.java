package com.globits.sample.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.globits.core.domain.Country;
import com.globits.sample.domain.Animal;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Long> {

}

package com.globits.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.globits.sample.domain.Tiger;

@Repository
public interface TigerRepository extends JpaRepository<Tiger, Long> { // extends
																									// JpaRepository<Staff,
																									// Long> {
}

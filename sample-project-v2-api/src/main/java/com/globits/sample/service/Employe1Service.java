package com.globits.sample.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.globits.sample.dto.Department1Dto;
import com.globits.sample.dto.Department2Dto;
import com.globits.sample.dto.Department2DtoSerchDto;
import com.globits.sample.dto.Employee1Dto;
import com.globits.sample.dto.Employee1SearchDto;
import com.globits.sample.dto.EmployeeDTO;
import com.globits.sample.dto.EmployeeDto2;
import com.globits.sample.dto.project_employee1Dto;

public interface Employe1Service {
	public Page<EmployeeDto2> searchByPage(Employee1SearchDto dto);
	EmployeeDto2 saveOrUpdate(EmployeeDto2 dto, Long id);
	public List<project_employee1Dto> danhsach2();
}

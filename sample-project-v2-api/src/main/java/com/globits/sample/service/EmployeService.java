package com.globits.sample.service;


import java.io.ByteArrayInputStream;
import java.util.List;

import org.springframework.data.domain.Page;
import com.globits.sample.dto.EmployeeDTO;
import com.globits.sample.dto.EmployeeSearchDto;


public interface EmployeService {
	public void deleteById(Long id);
	
	Page<EmployeeDTO> searchByPage(EmployeeSearchDto dto);
	
	EmployeeDTO getOne(Long id);
	
	EmployeeDTO saveOne(EmployeeDTO dto, Long id);
	 ByteArrayInputStream load();
}

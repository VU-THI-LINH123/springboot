package com.globits.sample.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.globits.sample.dto.Department1Dto;
import com.globits.sample.dto.Department2Dto;
import com.globits.sample.dto.Department2DtoSerchDto;

public interface Department1Service {
	 List<Department1Dto> danhsach1();
	 List<Department2Dto> danhsach2();
	 public Page<Department2Dto> searchByPage(Department2DtoSerchDto dto);
	 public Department2Dto saveOne(Department2Dto dto, Long id);
}

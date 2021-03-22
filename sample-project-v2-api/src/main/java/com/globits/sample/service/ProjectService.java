package com.globits.sample.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.globits.sample.domain.project_employee1;
import com.globits.sample.dto.ProjectDto;
import com.globits.sample.dto.ProjectSearchDto;
import com.globits.sample.dto.project_employee1Dto;

public interface ProjectService {
//	public List<project_employee1Dto> danhsach2();
	public Page<ProjectDto> searchByPage(ProjectSearchDto dto);
	public ProjectDto saveOrUpdate(ProjectDto dto, Long id) ;
	
}

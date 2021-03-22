package com.globits.sample.rest;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.globits.sample.domain.Project;
import com.globits.sample.domain.project_employee1;
import com.globits.sample.dto.Department2Dto;
import com.globits.sample.dto.Department2DtoSerchDto;
import com.globits.sample.dto.EmployeeDto2;
import com.globits.sample.dto.ProjectDto;
import com.globits.sample.dto.ProjectSearchDto;
import com.globits.sample.dto.project_employee1Dto;
import com.globits.sample.repository.Project_employee1Repository;
import com.globits.sample.service.Employe1Service;
import com.globits.sample.service.ProjectService;

@RestController 
//@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000" })
@RequestMapping(path = "/api/projecthi")
public class ProjectController {
	@Autowired 
	ProjectService projectService;
//	 @RequestMapping(value = "/getAll", method=RequestMethod.GET)
//	    public List<project_employee1Dto> getAll() {
//		     
//		return projectService.danhsach2();
//	 }
	 @RequestMapping(value = "/searchByPage", method=RequestMethod.POST)
	    public ResponseEntity<Page<ProjectDto>> searchByPage(@RequestBody ProjectSearchDto searchDto) {
		Page<ProjectDto> page = projectService.searchByPage(searchDto);

		return new ResponseEntity<>(page, HttpStatus.OK);
	    }
	 @RequestMapping(value = "/saver", method = RequestMethod.POST)
	    public ResponseEntity<ProjectDto> saveOne(@RequestBody ProjectDto dto) {
	    	
		ProjectDto result = projectService.saveOrUpdate(dto, null);

	return new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	 }
	 @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
		public ResponseEntity<ProjectDto> update(@RequestBody ProjectDto dto, @PathVariable("id") long id) {
		 ProjectDto result = projectService.saveOrUpdate(dto, id);
			return new ResponseEntity<ProjectDto>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
		}
		
	
		
}

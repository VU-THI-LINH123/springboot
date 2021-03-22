package com.globits.sample.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.globits.sample.domain.Employee;
import com.globits.sample.dto.Department1Dto;
import com.globits.sample.dto.Department2Dto;
import com.globits.sample.dto.Department2DtoSerchDto;
import com.globits.sample.dto.Employee1Dto;
import com.globits.sample.dto.EmployeeDTO;
import com.globits.sample.dto.EmployeeSearchDto;
import com.globits.sample.repository.EmployeeRepositiory;
import com.globits.sample.service.Department1Service;
import com.globits.sample.service.Employe1Service;

@RestController 
//@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000" })
@RequestMapping(path = "/api/department1")
public class RestDepartmantController {
	@Autowired
	Department1Service department1Service;
	@RequestMapping(value = "/searchByPage", method=RequestMethod.POST)
    public ResponseEntity<Page<Department2Dto>> searchByPage(@RequestBody Department2DtoSerchDto searchDto) {
	Page<Department2Dto> page = department1Service.searchByPage(searchDto);

	return new ResponseEntity<>(page, HttpStatus.OK);
    }
	 @RequestMapping(value = "/getAll", method=RequestMethod.GET)
	    public List<Department2Dto> getAll() {
		     
		return department1Service.danhsach2();
	 }
	 @RequestMapping(value = "/hi", method = RequestMethod.POST)
	    public ResponseEntity<Department2Dto> saveOne(@RequestBody Department2Dto dto) {
	    	
		Department2Dto result = department1Service.saveOne(dto, null);

	return new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	 }
}

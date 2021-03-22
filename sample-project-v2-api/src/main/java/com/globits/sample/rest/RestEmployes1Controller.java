package com.globits.sample.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.globits.sample.domain.Employee;
import com.globits.sample.domain.Employee1;
import com.globits.sample.dto.Department2Dto;
import com.globits.sample.dto.Department2DtoSerchDto;
import com.globits.sample.dto.Employee1Dto;
import com.globits.sample.dto.Employee1SearchDto;
import com.globits.sample.dto.EmployeeDto2;
import com.globits.sample.dto.project_employee1Dto;
import com.globits.sample.repository.Employee1Repositiory;
import com.globits.sample.service.Employe1Service;

@RestController 
//@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000" })
@RequestMapping(path = "/api/employes2")
public class RestEmployes1Controller {
	@Autowired 
	Employe1Service employe1Service;
	@RequestMapping(value = "/searchByPage", method=RequestMethod.POST)
	 public ResponseEntity<Page<EmployeeDto2>> searchByPage(@RequestBody Employee1SearchDto searchDto) {
			Page<EmployeeDto2> page = employe1Service.searchByPage(searchDto);

			return new ResponseEntity<>(page, HttpStatus.OK);
      }
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResponseEntity<EmployeeDto2> save(@RequestBody EmployeeDto2 dto) {
		EmployeeDto2 result =employe1Service.saveOrUpdate(dto, null);
		return new ResponseEntity<EmployeeDto2>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	   @RequestMapping(value = "/danhsach", method=RequestMethod.GET)
	    public List<project_employee1Dto> getAll() {
		     
		return employe1Service.danhsach2();
	    }
	
}

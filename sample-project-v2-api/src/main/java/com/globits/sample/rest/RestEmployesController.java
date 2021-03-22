package com.globits.sample.rest;
import java.io.InputStream;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
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
import com.globits.sample.dto.Employee1Dto;
import com.globits.sample.dto.EmployeeDTO;
import com.globits.sample.dto.EmployeeSearchDto;
import com.globits.sample.dto.ProjectDto;
import com.globits.sample.repository.EmployeeRepositiory;
import com.globits.sample.service.Department1Service;
import com.globits.sample.service.Employe1Service;
import com.globits.sample.service.EmployeService;
@RestController 
@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000" })
@RequestMapping(path = "/api/employee")
public class RestEmployesController {
	 @Autowired
	    EmployeService employeService;
	@Autowired
	Employe1Service Employe1Service;	    
	 @Autowired 
	 EmployeeRepositiory EmployeeRepositiory;
	 @Autowired
	 Department1Service hii;
	    @RequestMapping(value = "/hihi", method=RequestMethod.GET)
	    public List<Employee> getAll() {
		     
		return EmployeeRepositiory.findAll();
	    }
	
	    @RequestMapping(value = "/searchByPage", method=RequestMethod.POST)
	    public ResponseEntity<Page<EmployeeDTO>> searchByPage(@RequestBody EmployeeSearchDto searchDto) {
		Page<EmployeeDTO> page = employeService.searchByPage(searchDto);

		return new ResponseEntity<>(page, HttpStatus.OK);
	    }
	    @RequestMapping(value = "/{id}", method=RequestMethod.GET)
	    public ResponseEntity<EmployeeDTO> getOne(@PathVariable("id") Long id) {
		EmployeeDTO dto = employeService.getOne(id);

		return new ResponseEntity<>(dto, HttpStatus.OK);
	    }

	    
	    @RequestMapping(value = "/hi", method = RequestMethod.POST)
	    public ResponseEntity<EmployeeDTO> saveOne(@RequestBody EmployeeDTO dto) {
	    	
		EmployeeDTO result = employeService.saveOne(dto, null);

		return new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	    }

	    
	    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	    public ResponseEntity<EmployeeDTO> updateOne(@RequestBody EmployeeDTO dto, @PathVariable("id") Long id) {
		EmployeeDTO result = employeService.saveOne(dto, id);

		return new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	    }
	    
	    @RequestMapping(value = "/{id}", method=RequestMethod.DELETE)
	    public ResponseEntity<Boolean> deleteById(@PathVariable("id") Long id) {
		employeService.deleteById(id);

		return new ResponseEntity<>(true, HttpStatus.OK);
	    }
	    @RequestMapping(value = "/excel", method = RequestMethod.POST)
		public void getExcelStudent(HttpSession session, HttpServletResponse response) {
			try{
				InputStream ins = employeService.load();
				org.apache.commons.io.IOUtils.copy(ins, response.getOutputStream());
				response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
				response.addHeader("Content-Disposition", "attachment; filename=Asset.xlsx");
				response.flushBuffer();
			} catch(Exception e){
				System.out.println(e + "");
			}
		}

	
	   
//	    @RequestMapping(value = "/deletecheckMultiple/{id}", method = RequestMethod.DELETE)
//	    public ResponseEntity<Boolean> deleteCheckID(@PathVariable("id") Long id) {
//		boolean result = categoryService.deleteCheckById(id);
//		if (result) {
//		    e.deleteById(id);
//		    return new ResponseEntity<>(result, HttpStatus.OK);
//		} else
//		    return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
//	    }
}

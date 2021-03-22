package com.globits.sample.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.globits.core.domain.Department;
import com.globits.core.dto.DepartmentDto;
import com.globits.sample.domain.Department1;
import com.globits.sample.domain.Employee1;

public class Employee1Dto  {
	private long id;
	
    public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	private String name;
    private Department1Dto department1Dto;

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public Employee1Dto() {
		super();
	}
	public Department1Dto getDepartment1Dto() {
		return department1Dto;
	}
	public void setDepartment1Dto(Department1Dto department1Dto) {
		this.department1Dto = department1Dto;
	}
	public Employee1Dto(Employee1 employee1) {
	       this.name=employee1.getName();
	       this.id=employee1.getId();
	       if(employee1.getDepartment1()!=null && employee1.getDepartment1().getId()!=null)
	       {
	    	   this.department1Dto=new Department1Dto();
	    	   this.department1Dto.setName(employee1.getDepartment1().getName());
	    	   
	       }
		}
	public Employee1Dto(String name) {
	
		this.name = name;
	}
	public Employee1Dto(Long id,String name, Department1 department1) {
		super();
		this.id=id;
		this.name = name;
	    if(department1 !=null && department1.getId() !=null)
	    {
	    	department1Dto =new Department1Dto();
	    	department1Dto.setName(department1.getName());
	    }
	}
     
	
	}

    


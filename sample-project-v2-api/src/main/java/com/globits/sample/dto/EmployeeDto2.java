package com.globits.sample.dto;

import com.globits.sample.domain.Employee1;

public class EmployeeDto2 {
	private Long id;
	
	private  String name;
	   
	   public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	private Department2Dto department2Dto;
	    public String getName() {
		return name;
	    }
	   public void setName(String name) {
		this.name = name;
	   }
	   public Department2Dto getDepartment2Dto() {
		return department2Dto;
	    }
	    public void setDepartment2Dto(Department2Dto department2Dto) {
		this.department2Dto = department2Dto;
	    }
	    
		public EmployeeDto2() {
			super();
		}
		public EmployeeDto2(Employee1 employee1) {
			this.id=employee1.getId();
			this.name = employee1.getName();
		    if(employee1.getDepartment1()!=null && employee1.getDepartment1().getId()!=null)
		    {
		    	this.department2Dto=new Department2Dto();
		    	this.department2Dto.setName(employee1.getDepartment1().getName());
		    	this.department2Dto.setId(employee1.getDepartment1().getId());
		    }
		}
}

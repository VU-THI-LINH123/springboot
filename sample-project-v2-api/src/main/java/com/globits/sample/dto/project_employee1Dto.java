package com.globits.sample.dto;

import com.globits.sample.domain.Employee1;
import com.globits.sample.domain.project_employee1;

public class project_employee1Dto {
	private long id;
  
    private Employee1Dto employee1Dto;
    
	public project_employee1Dto() {
		super();
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Employee1Dto getEmployee1Dto() {
		return employee1Dto;
	}
	public void setEmployee1Dto(Employee1Dto employee1Dto) {
		this.employee1Dto = employee1Dto;
	}
	public project_employee1Dto(Employee1 employee1,boolean hi,boolean ha) {
		if(employee1 !=null) {
		   employee1Dto=new Employee1Dto();
		   employee1Dto.setId(employee1.getId());
		   employee1Dto.setName(employee1.getName());
		}
	}
	public project_employee1Dto(project_employee1  project_employee1,boolean hi) {
		if(project_employee1 !=null) {
		this.id = project_employee1.getId();}
	}
	public project_employee1Dto(project_employee1 project_employee1) {
		if(project_employee1 !=null)
		{
			this.id=project_employee1.getId();
			if(project_employee1.getEmployee1()!=null)
			{
				employee1Dto=new Employee1Dto(project_employee1.getEmployee1().getId(),project_employee1.getEmployee1().getName(),project_employee1.getEmployee1().getDepartment1());
			}
		}
	}
    
    
}

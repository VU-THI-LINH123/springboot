package com.globits.sample.dto;

import java.util.ArrayList;
import java.util.List;

import com.globits.sample.domain.Department1;
import com.globits.sample.domain.Employee1;

public class Department1Dto {
   private String name;
    private List<Employee1Dto>employee1Dtos;
public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public Department1Dto() {

}

public List<Employee1Dto> getEmployee1Dtos() {
	return employee1Dtos;
}

public void setEmployee1Dtos(List<Employee1Dto> employee1Dtos) {
	this.employee1Dtos = employee1Dtos;
}

public Department1Dto(Department1 department1) {

	this.name = department1.getName();
	if(department1.getEmployee1s()!=null && department1.getId()!=null) {
		employee1Dtos=new ArrayList<Employee1Dto>();
	for(Employee1 t:department1.getEmployee1s())
	{
	    employee1Dtos.add(new Employee1Dto(department1.getName()));
	}
      }
     }
}

package com.globits.sample.dto;

import com.globits.sample.domain.Department1;

public class Department2Dto {
	private Long id;
	private String name;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public Department2Dto() {
		super();
	}
	
	
	public Long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Department2Dto(Department1 department1) {
		if(department1 !=null)
		{
			this.id=department1.getId();
			this.name=department1.getName();
		}
	}   
}

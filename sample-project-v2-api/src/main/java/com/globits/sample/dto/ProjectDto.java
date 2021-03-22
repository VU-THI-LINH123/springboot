package com.globits.sample.dto;

import java.util.HashSet;
import java.util.Set;

import com.globits.sample.domain.Project;
import com.globits.sample.domain.project_employee1;

public class ProjectDto {
	private Long id;
    private String name;
    private Set<project_employee1Dto>dtos;
	

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Set<project_employee1Dto> getDtos() {
		return dtos;
	}
	public void setDtos(Set<project_employee1Dto> dtos) {
		this.dtos = dtos;
	}
	
	public ProjectDto() {
		super();
	}
	public ProjectDto(Project project,boolean th ) {
	      if(project !=null)
	      {
	    	  this.id=project.getId();
	    	  this.name=project.getName();
	    	  if(project.getProject_employee1s()!=null)
	    	  {
	    		  dtos=new HashSet<project_employee1Dto>();
	    		  for(project_employee1 l1:project.getProject_employee1s())
	    		  {
	    			  dtos.add(new project_employee1Dto(l1));
	    		  }
	    	  }
	      }
	}
	

	public ProjectDto(Project project,boolean hi,boolean h) {
	      if(project !=null)
	      {
	    	  if(project.getProject_employee1s()!=null)
	    	  {
	    		  dtos=new HashSet<project_employee1Dto>();
	    		  for(project_employee1 l1:project.getProject_employee1s())
	    		  {
	    			  dtos.add(new project_employee1Dto(l1,false));
	    		  }
	    	  }
	      }
	}
}

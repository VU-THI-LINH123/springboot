package com.globits.sample.domain;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Table(name = "tbl_project")
@Entity
public class Project {
	@Id
	@GeneratedValue(strategy = javax.persistence.GenerationType.AUTO )
	@Column(name = "id")
	private Long id;
	
	@Column(name = "name")
	private String name;
   
	 @OneToMany(mappedBy = "project", cascade = CascadeType.ALL)// thông qua khóa ngoại address_id
	   private Set<project_employee1>project_employee1s;

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

	public Set<project_employee1> getProject_employee1s() {
		return project_employee1s;
	}

	public void setProject_employee1s(Set<project_employee1> project_employee1s) {
		this.project_employee1s = project_employee1s;
	}
	   
}

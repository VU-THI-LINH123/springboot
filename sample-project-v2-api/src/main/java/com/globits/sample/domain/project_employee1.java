package com.globits.sample.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Table(name = "project_employee1")
@Entity
public class project_employee1 {
	@Id
	@GeneratedValue(strategy = javax.persistence.GenerationType.AUTO )
	@Column(name = "id")
   private long id;
	@ManyToOne
	 @JoinColumn(name = "employee1_id") // thông qua khóa ngoại address_id
	 private Employee1 employee1;
   public project_employee1() {
		
	}

@ManyToOne
   @JoinColumn(name = "project_id") // thông qua khóa ngoại address_id
   private Project  project;

public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public Employee1 getEmployee1() {
	return employee1;
}

public void setEmployee1(Employee1 employee1) {
	this.employee1 = employee1;
}

public Project getProject() {
	return project;
}

public void setProject(Project project) {
	this.project = project;
}

public project_employee1(long id, Employee1 employee1, Project project) {
	super();
	this.id = id;
	this.employee1 = employee1;
	this.project = project;
}

public project_employee1(Employee1 employee1) {
	super();
	this.employee1 = employee1;
}
   
}

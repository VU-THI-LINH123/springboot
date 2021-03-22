package com.globits.sample.domain;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Table(name = "tbl_employees1")
@Entity
public class Employee1 {

	@Id
	@GeneratedValue(strategy = javax.persistence.GenerationType.AUTO )
	@Column(name = "id")
	private Long id;
	@Column(name = "code")
	private String code;
	 
	@Column(name = "name")
	private String name;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "phone")
	private String phone;
   
	@OneToMany(mappedBy = "employee1", cascade = CascadeType.ALL)// thông qua khóa ngoại address_id
	   private Set<project_employee1>project_employee1s;
	public Employee1(String code, String name, String email, String phone, Department1 department1) {
		super();
		this.code = code;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.department1 = department1;
	}
	public Employee1() {
		
	}
	
	@ManyToOne
    @JoinColumn(name = "department1_id") // thông qua khóa ngoại address_id
    private Department1 department1;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public Set<project_employee1> getProject_employee1s() {
		return project_employee1s;
	}
	public void setProject_employee1s(Set<project_employee1> project_employee1s) {
		this.project_employee1s = project_employee1s;
	}
	public Department1 getDepartment1() {
		return department1;
	}
	public void setDepartment1(Department1 department1) {
		this.department1 = department1;
	}
	 
	
}

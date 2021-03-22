package com.globits.sample.dto;
import com.globits.sample.domain.Employee;

public class EmployeeDTO extends BaseObjectDto{

 private String code;
 private String name;
 private String email;
 private String phone;
 private String age;
 
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
public String getAge() {
	return age;
}
public void setAge(String age) {
	this.age = age;
}


public EmployeeDTO() {
	super();
}
public EmployeeDTO(Employee employee) {
	   if(employee!=null) {
		this.code = employee.getCode();
		this.name = employee.getName();
		this.email =employee.getEmail();
		this.phone =employee.getPhone();
		this.age = employee.getAge();
	}
}
 
}

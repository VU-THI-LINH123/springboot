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

@Table(name = "tbl_department1")
@Entity
public class Department1 {
	@Id
	@GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY )
	@Column(name = "id")
	private Long id;
	 
	@Column(name = "name")
	private String name;
	
	  @OneToMany(mappedBy = "department1", cascade = CascadeType.ALL)// thông qua khóa ngoại address_id
    private List<Employee1>employee1s ;

	public Department1(String name, Department1 department) {
		super();
		this.name = name;
		
	}

	public Department1(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public List<Employee1> getEmployee1s() {
		return employee1s;
	}

	public void setEmployee1s(List<Employee1> employee1s) {
		this.employee1s = employee1s;
	}

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

	public Department1() {

	}

	public Department1(Long id, String name, List<Employee1> employee1s) {
		this.id = id;
		this.name = name;
		this.employee1s = employee1s;
	}


}

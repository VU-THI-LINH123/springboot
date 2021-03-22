package com.globits.sample.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class BaseObject {

	@Id
	@GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY )
	@Column(name = "id")
	private Long id;
	
	
	@Column(name = "create_date")
	private Date createDate;
	
	@Column(name = "modify_date")
	private Date modifyDate;

	
	
	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Date getModifyDate() {
		return modifyDate;
	}

	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	
}

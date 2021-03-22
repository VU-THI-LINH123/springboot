package com.globits.sample.dto;

import java.util.Date;

import javax.persistence.Column;

public class BaseObjectDto {
	protected Long id;

	 
	protected Date createDate;
	 
	protected Date modifyDate;
	
	
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

package com.globits.sample.dto;

import java.util.UUID;

import com.globits.core.domain.Country;

public class AnimalDto {

	private UUID id;

	private String name;

	private String code;

	private String description;
	
	private boolean isDuplicate;
	private String dupName;
	private String dupCode;

	public AnimalDto() {

	}

	public AnimalDto(Country c) {
		this.code = c.getCode();
		this.name = c.getName();
		this.description = c.getDescription();
		this.id = c.getId();
	}

	public Country toEntity() {
		Country entity = new Country();

		entity.setId(id);
		entity.setName(name);
		entity.setCode(code);
		entity.setDescription(description);

		return entity;
	}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isDuplicate() {
		return isDuplicate;
	}

	public void setDuplicate(boolean isDuplicate) {
		this.isDuplicate = isDuplicate;
	}

	public String getDupName() {
		return dupName;
	}

	public void setDupName(String dupName) {
		this.dupName = dupName;
	}

	public String getDupCode() {
		return dupCode;
	}

	public void setDupCode(String dupCode) {
		this.dupCode = dupCode;
	}
}

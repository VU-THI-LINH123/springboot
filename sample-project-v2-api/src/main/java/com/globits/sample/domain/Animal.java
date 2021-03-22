package com.globits.sample.domain;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import com.globits.core.domain.BaseObject;

/**
 * @author dunghq Danh mục quốc gia
 */
//@Entity
//@Table(name = "tbl_animal")
//@Inheritance(strategy = InheritanceType.JOINED)
//@XmlRootElement

@Entity
@Inheritance(strategy=InheritanceType.JOINED)
@Table(name = "tbl_animal")
public class Animal{
	private static final long serialVersionUID = -5100199485809565238L;
	  
//	@Id
//	@GenericGenerator(name = "native", strategy = "native")
//	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
	@Id
	@Type(type = "uuid-char")
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
	private UUID id;
	
	@Column(name = "name")
	private String name;
	@Column(name = "code")
	private String code;
	@Column(name = "description")
	private String description;



	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

}

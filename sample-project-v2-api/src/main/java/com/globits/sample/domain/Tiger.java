package com.globits.sample.domain;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.ConstraintMode;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

import com.globits.core.domain.Person;

@Entity
@Table(name = "tbl_tiger")
@PrimaryKeyJoinColumn(name="staff_id")
@XmlRootElement
public class Tiger extends Animal {
	private static final long serialVersionUID = 6014783475303579207L;

	@Column(name = "tiger_code", nullable = true, unique = true)
	private String tigerCode;

	@Column(name = "current_working_status", nullable = true)
	private Integer currentWorkingStatus;

	@Column(name = "social_insurance_number", nullable = true)
	private String socialInsuranceNumber;//Số sổ bảo hiểm xã hội
	public Integer getCurrentWorkingStatus() {
		return currentWorkingStatus;
	}

	public void setCurrentWorkingStatus(Integer currentWorkingStatus) {
		this.currentWorkingStatus = currentWorkingStatus;
	}
	public String getSocialInsuranceNumber() {
		return socialInsuranceNumber;
	}

	public void setSocialInsuranceNumber(String socialInsuranceNumber) {
		this.socialInsuranceNumber = socialInsuranceNumber;
	}


	
	public String getTigerCode() {
		return tigerCode;
	}

	public void setTigerCode(String tigerCode) {
		this.tigerCode = tigerCode;
	}

	public Tiger() {

	}

	public Tiger(UUID id, String firstName, String lastName, String staffCode, String displayName) {
		this.setId(id);
//		this.setFirstName(firstName);
//		this.setLastName(lastName);
//		this.setStaffCode(staffCode);
//		this.setDisplayName(displayName);
	}

	public Tiger(Tiger staff) {
//		super(staff);
//		this.staffCode = staff.getStaffCode();
	}
}

package com.globits.sample.service.impl;

import java.io.ByteArrayInputStream;
import java.util.List;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.globits.sample.domain.Department1;
import com.globits.sample.domain.Employee1;
import com.globits.sample.dto.Department1Dto;
import com.globits.sample.dto.Employee1Dto;
import com.globits.sample.dto.Employee1SearchDto;
import com.globits.sample.dto.EmployeeDto2;
import com.globits.sample.dto.project_employee1Dto;
import com.globits.sample.repository.Department1Repository;
import com.globits.sample.repository.Employee1Repositiory;
import com.globits.sample.repository.EmployeeRepositiory;
import com.globits.sample.service.Employe1Service;

@Service
@Transactional
public class Employee1Serviceimpl implements Employe1Service {
	@Autowired
	EntityManager manager;
	@Autowired
	Employee1Repositiory employee1Repositiory;
	@Autowired
	Department1Repository department1Repository;
	@Override
	public Page<EmployeeDto2> searchByPage(Employee1SearchDto dto) {
		if (dto == null) {
			return null;
		}

		int pageIndex = dto.getPageIndex();
		int pageSize = dto.getPageSize();

		if (pageIndex > 0) {
			pageIndex--;
		} else {
			pageIndex = 0;
		}

		String whereClause = "";
		
		String orderBy = " ORDER BY entity.id DESC";
		if (dto.getOrderBy() != null && StringUtils.hasLength(dto.getOrderBy().toString())) {
			orderBy = " ORDER BY entity."+dto.getOrderBy()+" ASC";
		}
		
		String sqlCount = "select count(entity.id) from Employee1 as entity where (1=1)";
		String sql = "select new  com.globits.sample.dto.EmployeeDto2(entity) from Employee1 as entity where (1=1)";

		if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
			whereClause += " AND UPPER(entity.name) LIKE UPPER(:text) )";
		}


		sql += whereClause + orderBy;
		sqlCount += whereClause;

		Query q = manager.createQuery(sql, EmployeeDto2.class);
		Query qCount = manager.createQuery(sqlCount);

		if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
			q.setParameter("text", '%' + dto.getKeyword() + '%');
			qCount.setParameter("text", '%' + dto.getKeyword() + '%');
		}
		


		int startPosition = pageIndex * pageSize;
		q.setFirstResult(startPosition);
		q.setMaxResults(pageSize);
		List<EmployeeDto2> entities = q.getResultList();
		long count = (long) qCount.getSingleResult(); 

		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		Page<EmployeeDto2> result = new PageImpl<EmployeeDto2>(entities, pageable, count);
		return result;
	}
	public List<Department1Dto> danhsach1() {
		String sql = "select new  com.globits.sample.dto.Department1Dto(entity) from Department1 as entity";
		Query q = manager.createQuery(sql,Department1Dto.class);
		List<Department1Dto> entities = q.getResultList();
	  
	    return entities;
  }
	public List<project_employee1Dto> danhsach2() {
		String sql = "select new  com.globits.sample.dto.project_employee1Dto (entity,true,true) from  Employee1 as entity";
		Query q = manager.createQuery(sql,project_employee1Dto.class);
		List<project_employee1Dto> entities = q.getResultList();
	  
	    return entities;
  }
	public EmployeeDto2 saveOrUpdate(EmployeeDto2 dto, Long id) {
		if(dto != null) {
			Employee1 entity = null;
			if(id != null) {
				entity = employee1Repositiory.getOne(id);
			}
			if(entity == null) {
				entity = new Employee1();
			}
			
			entity.setName(dto.getName());
			Department1 department1 = null;
			if(dto.getDepartment2Dto()!= null && dto.getDepartment2Dto().getId() != null) {
				department1 = department1Repository.getOne(dto.getDepartment2Dto().getId());
			}
			entity.setDepartment1(department1);
			
			entity = employee1Repositiory.save(entity);
			if(entity != null) {
				return new EmployeeDto2(entity);
			}
			
		}
		return null;
	}
	

}

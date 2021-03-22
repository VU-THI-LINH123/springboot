package com.globits.sample.service.impl;

import java.util.Date;
import java.util.List;

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
import com.globits.sample.domain.Employee;
import com.globits.sample.dto.Department1Dto;
import com.globits.sample.dto.Department2Dto;
import com.globits.sample.dto.Department2DtoSerchDto;
import com.globits.sample.dto.EmployeeDTO;
import com.globits.sample.repository.Department1Repository;
import com.globits.sample.service.Department1Service;
@Service
@Transactional
public class Department1Impl implements Department1Service {
	@Autowired
	EntityManager manager;
	@Autowired
	Department1Repository department1Repository;
	public Page<Department2Dto> searchByPage(Department2DtoSerchDto dto) {
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
		
		String sqlCount = "select count(entity.id) from Department1 as entity where (1=1)";
		String sql = "select new  com.globits.sample.dto.Department2Dto(entity) from Department1 as entity where (1=1)";

		if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
			whereClause += " AND ( UPPER(entity.name) LIKE UPPER(:text))";
		}


		sql += whereClause + orderBy;
		sqlCount += whereClause;

		Query q = manager.createQuery(sql, Department2Dto.class);
		Query qCount = manager.createQuery(sqlCount);

		if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
			q.setParameter("text", '%' + dto.getKeyword() + '%');
			qCount.setParameter("text", '%' + dto.getKeyword() + '%');
		}
		


		int startPosition = pageIndex * pageSize;
		q.setFirstResult(startPosition);
		q.setMaxResults(pageSize);
		List<Department2Dto> entities = q.getResultList();
		long count = (long) qCount.getSingleResult(); 

		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		Page<Department2Dto> result = new PageImpl<Department2Dto>(entities, pageable, count);
		return result;
	}
	public List<Department1Dto> danhsach1() {
		String sql = "select new  com.globits.sample.dto.Department1Dto(entity) from Department1 as entity";
		Query q = manager.createQuery(sql,Department1Dto.class);
		List<Department1Dto> entities = q.getResultList();
	  
	    return entities;
  }
	public Department2Dto saveOne(Department2Dto dto, Long id) {
		if (dto != null) {
			Department1 entity = null;
			if (id != null) {
				if (dto.getId()!=null && !dto.getId().equals(id)) {
					return null;
				}
				entity = department1Repository.getOne(id);
				
			}
			if (entity == null) {
				entity = new Department1();
				
			}
			
			/* Set all the values */
			entity.setName(dto.getName());
			entity = department1Repository.save(entity);
			
			if (entity != null) {
				return new Department2Dto(entity);
			}
		}
		
		return null;
	}
	public List<Department2Dto> danhsach2() {
		String sql = "select new  com.globits.sample.dto.Department2Dto(entity) from Department1 as entity";
		Query q = manager.createQuery(sql,Department2Dto.class);
		List<Department2Dto> entities = q.getResultList();
	  
	    return entities;
  }

}

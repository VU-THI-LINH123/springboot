package com.globits.sample.service.impl;

import java.io.ByteArrayInputStream;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import com.globits.sample.domain.Employee;
import com.globits.sample.dto.EmployeeDTO;
import com.globits.sample.dto.EmployeeSearchDto;
import com.globits.sample.repository.EmployeeRepositiory;
import com.globits.sample.service.EmployeService;

@Service
@Transactional
public class EmployeeServiceimpl implements EmployeService{
	@Autowired
	EntityManager manager;
 
  
	public SessionFactory getSessionFactory() {
		Session session = manager.unwrap(Session.class);
		return session.getSessionFactory();
	}
	@Autowired
	EmployeeRepositiory employeeRepositiory;
	
	@Override
	public void deleteById(Long id) {
		employeeRepositiory.deleteById(id);
		
	}
	

	@Override
	public Page<EmployeeDTO> searchByPage(EmployeeSearchDto dto) {
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
		
		String sqlCount = "select count(entity.id) from Employee as entity where (1=1)";
		String sql = "select new  com.globits.sample.dto.EmployeeDTO(entity) from Employee as entity where (1=1)";

		if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
			whereClause += " AND ( UPPER(entity.code) LIKE UPPER(:text) OR UPPER(entity.name) LIKE UPPER(:text)  OR UPPER(entity.email) LIKE UPPER(:text)OR UPPER(entity.phone) LIKE UPPER(:text))";
		}


		sql += whereClause + orderBy;
		sqlCount += whereClause;

		Query q = manager.createQuery(sql, EmployeeDTO.class);
		Query qCount = manager.createQuery(sqlCount);

		if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
			q.setParameter("text", '%' + dto.getKeyword() + '%');
			qCount.setParameter("text", '%' + dto.getKeyword() + '%');
		}
		


		int startPosition = pageIndex * pageSize;
		q.setFirstResult(startPosition);
		q.setMaxResults(pageSize);
		List<EmployeeDTO> entities = q.getResultList();
		long count = (long) qCount.getSingleResult(); 

		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		Page<EmployeeDTO> result = new PageImpl<EmployeeDTO>(entities, pageable, count);
		return result;
	}

	@Override
	public EmployeeDTO saveOne(EmployeeDTO dto, Long id) {
		if (dto != null) {
			Employee entity = null;
			if (id != null) {
				if (dto.getId() != null && !dto.getId().equals(id)) {
					return null;
				}
				entity =  employeeRepositiory.getOne(id);
				entity.setModifyDate(new Date());
			}
			if (entity == null) {
				entity = new Employee();
				entity.setCreateDate(new Date());
			}
			
			/* Set all the values */
			entity.setName(dto.getName());
			entity.setCode(dto.getCode());
			entity.setAge(dto.getAge());
			entity.setEmail(dto.getEmail());
			entity.setPhone(dto.getPhone());
			if (entity.getId() != null) {
				entity.setModifyDate(new Date());
			} else {
				entity.setCreateDate(new Date());
				entity.setModifyDate(new Date());
			}
			entity = employeeRepositiory.save(entity);
			
			if (entity != null) {
				return new EmployeeDTO(entity);
			}
		}
		
		return null;
	}

	@Override
	public EmployeeDTO getOne(Long id) {
		Employee entity = employeeRepositiory.getOne(id);
		
		if (entity != null) {
			return new EmployeeDTO(entity);
		}
		
		return null;
	}
//	public List<EmployeeDTO>danhsach()
//	{
//		String sql = "select new  com.globits.sample.dto.EmployeeDTO(entity) from Employee as entity";
//		Query q = manager.createQuery(sql,EmployeeDTO.class);
//		List<EmployeeDTO> entities = q.getResultList();
//		return entities;
//	}

//	  public ByteArrayInputStream load() {
//		
//			List<Employee> entities = employeeRepositiory.findAll();
//		    ByteArrayInputStream in = ExcelHelper.tutorialsToExcel(entities);
//		    return in;
//	  
//	  }
	public ByteArrayInputStream load() {
			String sql = "select new  com.globits.sample.dto.EmployeeDTO(entity) from Employee as entity";
			Query q = manager.createQuery(sql,EmployeeDTO.class);
			List<EmployeeDTO> entities = q.getResultList();
		    ByteArrayInputStream in = ExcelHelper.tutorialsToExcel(entities);
		    return in;
	  
	  }

}

package com.globits.sample.service.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.globits.sample.domain.Department1;
import com.globits.sample.domain.Employee1;
import com.globits.sample.domain.Project;
import com.globits.sample.domain.project_employee1;
import com.globits.sample.dto.Department2Dto;
import com.globits.sample.dto.Employee1Dto;
import com.globits.sample.dto.Employee1SearchDto;
import com.globits.sample.dto.EmployeeDto2;
import com.globits.sample.dto.ProjectDto;
import com.globits.sample.dto.ProjectSearchDto;
import com.globits.sample.dto.project_employee1Dto;

import com.globits.sample.repository.ProjectRepository;
import com.globits.sample.repository.Project_employee1Repository;
import com.globits.sample.service.ProjectService;

@Transactional
@Service
public class ProjectImpl implements ProjectService {
	@Autowired
	EntityManager manager;
	@Autowired
	 Project_employee1Repository project_employee1Repository2;
	@Autowired
	ProjectRepository projectRepository;
	public Page<ProjectDto> searchByPage(ProjectSearchDto dto) {
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
		
		String sqlCount = "select count(entity.id) from Project as entity where (1=1)";
		String sql = "select new  com.globits.sample.dto.ProjectDto(entity,true) from Project as entity where (1=1)";

		if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
			whereClause += " AND UPPER(entity.name) LIKE UPPER(:text)";
		}


		sql += whereClause + orderBy;
		sqlCount += whereClause;

		Query q = manager.createQuery(sql, ProjectDto.class);
		Query qCount = manager.createQuery(sqlCount);

		if (dto.getKeyword() != null && StringUtils.hasText(dto.getKeyword())) {
			q.setParameter("text", '%' + dto.getKeyword() + '%');
			qCount.setParameter("text", '%' + dto.getKeyword() + '%');
		}
		


		int startPosition = pageIndex * pageSize;
		q.setFirstResult(startPosition);
		q.setMaxResults(pageSize);
		List<ProjectDto> entities = q.getResultList();
		long count = (long) qCount.getSingleResult(); 

		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		Page<ProjectDto> result = new PageImpl<ProjectDto>(entities, pageable, count);
		return result;
	}
public ProjectDto saveOrUpdate(ProjectDto dto, Long id) {
	if(dto!=null)
	{
		Project entity=null;
		if(id!=null)
		{
			if(dto.getId()!=null && !dto.getId().equals(id))
			{
				return null;
			}
			entity=projectRepository.getOne(id);
		}
		if(entity !=null)//update ban ghi
		{
			 entity.setName(dto.getName());
			 projectRepository.save(entity);
			String sql = "select new  com.globits.sample.dto.project_employee1Dto(entity) from project_employee1  as entity where entity.project.id=:id";
			Query q = manager.createQuery(sql,project_employee1Dto.class);
			 q.setParameter("id",id);
			List<project_employee1Dto> entities = q.getResultList();
			for(project_employee1Dto sp:entities)
			{
			   project_employee1Repository2.deleteById(sp.getId());	
			}
			
		  for(project_employee1Dto sp:dto.getDtos())
		  {
			 project_employee1 t= new project_employee1();
			    Employee1 employee1=new Employee1();
			    employee1.setId(sp.getEmployee1Dto().getId());
			    Project project=new Project();
			    project.setId(id);
			    t.setEmployee1(employee1);
			    t.setProject(project);
			    project_employee1Repository2.save(t);
			   
		  }
		  return new ProjectDto(projectRepository.getOne(id),true);
		}
		if(entity==null)//insert ban ghi
		{
			entity=new Project();
			entity.setName(dto.getName());
			 Set<project_employee1>danhsach=new HashSet<project_employee1>();
			 for(project_employee1Dto sp:dto.getDtos())
			 {
				project_employee1 pe=new project_employee1();
				 Employee1 employee1=new Employee1();
				 employee1.setId(sp.getEmployee1Dto().getId());
				  pe.setEmployee1(employee1);
				  pe.setProject(entity);
				  danhsach.add(pe);	
			 }
			 entity.setProject_employee1s(danhsach);
			 entity= projectRepository.save(entity);
			 if(entity != null) {
					return new ProjectDto(entity,true);
				}
		}
	}
	  
	  return null;
}
}

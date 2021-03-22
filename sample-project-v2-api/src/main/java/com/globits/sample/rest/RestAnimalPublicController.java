package com.globits.sample.rest;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.jboss.logging.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.globits.core.Constants;
import com.globits.core.domain.Country;
import com.globits.core.dto.CountryDto;
import com.globits.core.service.CountryService;

@RestController
@RequestMapping("/public/animal")
public class RestAnimalPublicController {
	@PersistenceContext
	private EntityManager manager;
	@Autowired
	private CountryService countryService;

	@RequestMapping(value = "/{pageIndex}/{pageSize}", method = RequestMethod.GET)
//	@Secured({ Constants.ROLE_ADMIN, Constants.ROLE_ADMIN ,Constants.ROLE_EDUCATION_MANAGERMENT,Constants.ROLE_FINANCIAL_MANAGERMENT,Constants.ROLE_EXAM_MANAGERMENT,Constants.ROLE_STUDENT_MANAGERMENT, 
//		Constants.ROLE_ADMIN})
	//@PreAuthorize("isAuthenticated()")
	public Page<Country> getList(@PathVariable int pageIndex, @PathVariable int pageSize) {
		Page<Country> page = countryService.getList(pageIndex, pageSize);
		return page;
	}
	@RequestMapping(method = RequestMethod.GET)
	public Page<Country> getListByParam(@RequestParam(name="page") int page, @RequestParam(name="size") int size) {
		Page<Country> pageInfo = countryService.getList(page, size);
		return pageInfo;
	}

	
	@Secured({ Constants.ROLE_ADMIN,Constants.ROLE_USER})
	@RequestMapping(value = "/{countryId}", method = RequestMethod.GET)
	public Country getCountry(@PathVariable("countryId") String countryId) {
		Country country = countryService.findById(UUID.fromString(countryId));
		// building = new Building(building);
		return country;
	}

	@Secured({ Constants.ROLE_ADMIN,Constants.ROLE_USER})
	@RequestMapping(method = RequestMethod.POST)
	public Country saveCountry(@RequestBody Country country) {
		return countryService.save(country);
	}

	@Secured({ Constants.ROLE_ADMIN,Constants.ROLE_USER})
	@RequestMapping(value = "/{countryId}", method = RequestMethod.PUT)
	public Country updateCountry(@RequestBody Country Country, @PathVariable("countryId") Long CountryId) {
		return countryService.save(Country);
	}

	@Secured({Constants.ROLE_ADMIN,"ROLE_STUDENT_MANAGERMENT"})
	@RequestMapping(value = "/{countryId}", method = RequestMethod.DELETE)
	public Country removeCountry(@PathVariable("countryId") String countryId) {
		Country Country = countryService.delete(UUID.fromString(countryId));
		return Country;
	}
	
	@Secured({ Constants.ROLE_ADMIN,Constants.ROLE_USER})
	@RequestMapping(value = "/checkCode/{code}",method = RequestMethod.GET)
	public CountryDto checkDuplicateCode(@PathVariable("code") String code) {
		return countryService.checkDuplicateCode(code);
	}
}

package com.home_etland.web.emp;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.home_etland.web.cmm.IConsumer;
import com.home_etland.web.cmm.IFunction;
import com.home_etland.web.cmm.PrintService;
import com.home_etland.web.cmm.Users;
import com.home_etland.web.cust.CustController;

@RestController
public class EmpController {
private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	
	@Autowired Employee emp;
	@Autowired PrintService ps;
	@Autowired EmpMapper empMap;
	@Autowired Map<String,Object> map;
	@Autowired Users<?> user;
	
	@PostMapping("/employees/{userid}")
	public Employee login(
			@PathVariable String userid,
			@RequestBody Employee param) {
		logger.info("----------2.login진입------------");
		IFunction i = (Object o) ->  empMap.selectEmployee(param);
		return  (Employee) i.apply(param);
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/employees/page/{page}")
	public List<Users<?>> list(
			@PathVariable String page,
			@RequestBody Map<?, ?> param) {
		logger.info("----------2.list진입------------");
		IFunction i = (Object o) -> empMap.selectEmployees(param);
		
				return (List<Users<?>>) i.apply(param);
		
	}
	
	@PostMapping("/employees")
	public Map<String,Object> join(
			@RequestBody Employee param) {
		logger.info("----------2.register진입------------");
		IConsumer c =  (Object o) -> empMap.insertEmployee(param);
		c.accept(param);
		map.clear();
		map.put("msg","SUCCESS");
		return map;
	}
	
	@PutMapping("/employees/{userid}")
	public Map<String,Object> update(
			@PathVariable String userid,
			@RequestBody Employee param) {
		logger.info("----------2.update진입------------");
		
		IConsumer c =  (Object o) -> empMap.updateEmployee(param);
		c.accept(param);
		map.clear();
		map.put("msg","SUCCESS");
		
		return map;
	}
	
	@DeleteMapping("/employees/{userid}")
	public Map<String,Object> delete(
			@PathVariable String userid,
			@RequestBody Employee param) {
		logger.info("----------2.delete진입------------");
		
		IConsumer c =  (Object o) -> empMap.deleteEmployee(param);
		c.accept(param);
		map.clear();
		map.put("msg","SUCCESS");
		
		return map;
	}
}

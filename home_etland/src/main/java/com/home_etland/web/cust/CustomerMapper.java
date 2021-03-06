package com.home_etland.web.cust;


import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface CustomerMapper {
	
	public void insertCustomer(Customer cust);

	public List<Customer> selectCustomerList(Map<?,?> map);

	public List<Customer> selectCustomers(Map<?,?> map);

	public Customer selectCustomer(Customer cust);
	
	public Customer retriveCustomer(Customer cust);

	public int countCustomer(Map<?,?> map);

	public void updateCustomer(Customer cust);

	public Map<String, Object> selectProfile(Map<?,?> map);

	public void deleteCustomer(Customer cust);

	public Map<String, Object> SelectPhone(Map<?,?> map);
}

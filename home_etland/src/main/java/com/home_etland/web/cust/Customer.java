package com.home_etland.web.cust;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Customer {
	private String 	
	rownum,
	customerID,
	customerName,
	password,
	ssn,
	photo,
	phone,
	city, 
	address, 
	postalCode
	;
}

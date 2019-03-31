package com.home_etland.web.cmm;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class CommonController {
	
	private static final Logger logger = LoggerFactory.getLogger(CommonController.class);
	@GetMapping("/")
	public String home() {
		logger.info("-----------1.common진입------------");
		return "index";
	}	
}
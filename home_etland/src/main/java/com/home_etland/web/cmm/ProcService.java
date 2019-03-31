package com.home_etland.web.cmm;

import org.springframework.stereotype.Service;

@FunctionalInterface
@Service
public interface ProcService {
	public abstract void execute(Object o);
}

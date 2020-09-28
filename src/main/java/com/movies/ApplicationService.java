//$Id$
package com.movies;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import com.movies.services.MovieService;

@ApplicationPath("/v1")
public class ApplicationService extends Application{
	private Set<Object> singletons = new HashSet<Object>();

	public ApplicationService() {
		singletons.add(new MovieService());
	}

	@Override
	public Set<Object> getSingletons() {
		return singletons;
	}

	@Override
	public Set<Class<?>> getClasses() {
		return super.getClasses();
	}

	@Override
	public Map<String, Object> getProperties() {
		return super.getProperties();
	}
}

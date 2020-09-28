//$Id$
package com.movies.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.jboss.resteasy.spi.ResteasyProviderFactory;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.movies.Constants;

@JsonRootName(value = "movies")
@JsonTypeName("movies")
@JsonPropertyOrder({"id", "name","release_date", "categories", "links" })

public class Movie {


	public enum Category{
		Action,
		Thriller,
		Comedy,
		Romance
	}

	public Movie() {
	}

	private Date releaseDate;

	private String name;

	private Long id;

	private Set<Category> categories;

	private List<MovieLink> links=new ArrayList<MovieLink>();


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}



	public Set<Category> getCategories() {
		return categories;
	}

	public void setCategories(Set<Category> categories) {
		this.categories = categories;
	}
	@JsonGetter(value = "release_date")
	public String getDate() {

		return releaseDate!=null ? Constants.commonDateFormat.format(releaseDate) : null ;
	}


	public List<MovieLink> getLinks() {	
		if(links.isEmpty())
		{
			links.add(new MovieLink());
			String domain=ResteasyProviderFactory.getContextData(HttpServletRequest.class).getScheme()+"://"+ResteasyProviderFactory.getContextData(HttpServletRequest.class).getServerName() + ":" +ResteasyProviderFactory.getContextData(HttpServletRequest.class).getServerPort();
			links.get(0).setHref(domain.toString()+"/v1/movies/"+this.id);
		}
		return links;
	}

	@JsonIgnore
	public Date getReleaseDate() {
		return releaseDate ;
	}

	public void setDate(Date date) {
		this.releaseDate = date;
	}

	@Override
	public boolean equals(Object obj) {
		if(obj==this)
		{
			return true;
		}
		if(obj instanceof Movie)
		{
			Movie clone=(Movie) obj;
			return clone.name.equalsIgnoreCase(this.name);
		}
		return false;
	}


	@Override
	public String toString() {

		return "movie_name->"+name+ " movie_id->" + id +", release_time->" +releaseDate +" links->"+getLinks();
	}
}

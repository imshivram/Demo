//$Id$
package com.movies.model;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Set;
import java.util.TimeZone;

import javax.ws.rs.QueryParam;

import com.movies.model.Movie.Category;

public class MovieSearch {
	
	  @QueryParam("name")
	  private String name;
	 
	  @QueryParam("from_date")
	  private String fromDate;
	  
	  @QueryParam("to_date")
	  private String toDate;
	  
	  @QueryParam("categories")
	  private Set<Category> categories=null;
	
	  
	  public String getName() {
			return name;
		}
	  
	  public Set<Category> getCategories() {
			return categories;
		}
	  
	  public Date getFromDate() throws ParseException {
		    SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd");
			format.setTimeZone(TimeZone.getTimeZone("GMT"));
			return fromDate!=null ? format.parse(fromDate) : null ;
		}
	  
	  public Date getToDate() throws ParseException {
		    SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd");
			format.setTimeZone(TimeZone.getTimeZone("GMT"));
			return  toDate!=null ? format.parse(toDate) : null ;
		}
	  
	  public boolean isEmptySearch() {
			return toDate==null && fromDate==null && name==null && (categories==null || categories.isEmpty())  ;
		}
}

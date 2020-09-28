//$Id$
package com.movies.services;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.ws.rs.BeanParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.movies.dao.MovieDAOImpl;
import com.movies.model.Movie;
import com.movies.model.Movie.Category;
import com.movies.model.MovieSearch;

@Path("/")
public class MovieService {

	@GET
	@Path("/movies")
	@Produces({ MediaType.APPLICATION_JSON})
	public Object getMovies( @BeanParam MovieSearch search) throws Exception {
		MovieDAOImpl factory=MovieDAOImpl.getInstance();
		List<Movie> movies=factory.getMovies();
		if(movies.isEmpty())
		{
			return Response.status(Response.Status.NO_CONTENT).build();
		}
		if(search!=null && !search.isEmptySearch())
		{
			applySearch(search, movies);
		}
		if(movies.isEmpty())
		{
			return Response.status(Response.Status.NO_CONTENT).build();
		}
		if(movies.size()>10)
		{
			return new ArrayList<Movie> (movies).subList(0, 10);
		}
		return movies;
	}


	@GET
	@Path("/movies/{id:[\\d]+}")
	@Produces({ MediaType.APPLICATION_JSON})
	public Object getMoviesById(@PathParam("id") Long id) {

		MovieDAOImpl factory=MovieDAOImpl.getInstance();
		Movie movie=factory.getMovie(id);
		if(movie==null)
		{
			return Response.status(Response.Status.NO_CONTENT).build();
		}
		return movie;
	}

	@POST
	@Path("/movies")
	@Consumes({ MediaType.APPLICATION_JSON })
	public Object addMovie(Collection<Movie> movies) throws Exception {
		MovieDAOImpl factory=MovieDAOImpl.getInstance();
		try { 
			for(Movie movie:movies)
			{
				movie.setId(factory.getMovies().size()+1l);
				if(!factory.isMoviePresent(movie))
				{
					factory.addMovie(movie);
				}
				else
				{
					return Response.status(Response.Status.CONFLICT).build();
				}
			}

		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return Response.status(Response.Status.CREATED).entity(movies).build();
	}


	private void applySearch(MovieSearch search, List<Movie> movies)
			throws ParseException {
		Iterator<Movie>movieItr=movies.iterator();
		while(movieItr.hasNext())
		{
			Movie movie=movieItr.next();
			String searchName=search.getName();
			/*
			 * search by name
			 */
			if(searchName!=null)
			{
				if(!movie.getName().contains(searchName))
				{
					movieItr.remove();
					continue;
				}
			}
			/*
			 * search by category
			 */
			Set<Category> category=search.getCategories();

			if(category!=null && !category.isEmpty())
			{
				Set<Category>tempCategories=new HashSet(movie.getCategories());
				tempCategories.retainAll(category);
				if(tempCategories.isEmpty())
				{
					movieItr.remove();
					continue;
				}
			}	
			/*
			 * search by date
			 */
			Date fromDate=search.getFromDate();
			Date toDate=search.getToDate();

			if(fromDate!=null && toDate!=null)
			{
				if(fromDate.after(movie.getReleaseDate()) || toDate.before(movie.getReleaseDate()) )
				{
					movieItr.remove();
					continue;
				}
			}
		}
	}


}

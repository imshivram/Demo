//$Id$
package com.movies.dao;

import java.util.List;

import com.movies.model.Movie;

public interface iMovieDAO {
	
	public Movie getMovie(Long id);
	
	public List<Movie> getMovies();
	
	public void addMovie(Movie movie) throws Exception;

	public void searchMovie();
	
	public void deleteMovie(int id);
	

}

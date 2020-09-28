//$Id$
package com.movies.dao;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import com.movies.model.Movie;

public class MovieDAOImpl implements iMovieDAO{

	private static MovieDAOImpl movieStoreInstance;

	private static Map<Long,Movie> movieStoreMap;

	private MovieDAOImpl()
	{

	}


	@Override
	public Movie getMovie(Long id) {
		return movieStoreMap.get(id);
	}

	@Override
	public List<Movie> getMovies() {
		return new ArrayList<Movie>(movieStoreMap.values());
	}



	public static MovieDAOImpl getInstance()
	{
		if(movieStoreInstance==null){
			synchronized (MovieDAOImpl.class) {
				if(movieStoreInstance==null)
				{
					movieStoreMap=new TreeMap<Long, Movie>((o1,o2)->o2.compareTo(o1));
					movieStoreInstance= new MovieDAOImpl();
					return movieStoreInstance;
				}
			}
		}
		return movieStoreInstance;
	}



	@Override
	public void addMovie(Movie movie) {

		synchronized (this) {
			movie.setId(movieStoreMap.size()+1l);
		}
		movieStoreMap.put(movie.getId(), movie);
	}

	public boolean isMoviePresent(Movie movie)
	{
		return movieStoreMap.values().contains(movie);
	}

	@Override
	public void searchMovie() {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteMovie(int id) {
		// TODO Auto-generated method stub

	}

}

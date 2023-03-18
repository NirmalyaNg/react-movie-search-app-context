import React, { useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import classes from './MovieList.module.css';
import Movie from './Movie';
import Card from '../UI/Card';

const MovieList = () => {
  const { isLoading, movies, error } = useContext(MoviesContext);
  let content = movies
    .filter((movie) => movie.Poster !== 'N/A')
    .map((movie) => (
      <Card key={movie.imdbID}>
        <Movie movie={movie} />
      </Card>
    ));

  if (movies.length === 0) {
    return <h3 className={classes.moviesFallback}>No movies found! Search something...</h3>;
  }

  if (isLoading) {
    return <h3 className={classes.moviesFallback}>Fetching Movies...</h3>;
  }

  if (error) {
    return <h3 className={classes.moviesFallback}>{error}</h3>;
  }
  return <div className={classes.movieList}>{content}</div>;
};

export default MovieList;

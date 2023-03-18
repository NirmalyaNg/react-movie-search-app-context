import React from 'react';
import classes from './Movie.module.css';

const Movie = ({ movie }) => {
  return (
    <div className={classes.movie}>
      <div className={classes.movieImage}>
        <img src={movie.Poster} alt='' />
      </div>
      <p>{movie.Title}</p>
    </div>
  );
};

export default Movie;

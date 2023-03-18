import React, { Fragment, useContext, useEffect, useState } from 'react';
import classes from './SearchMovie.module.css';
import Input from '../UI/Input';
import { MoviesContext } from '../../context/MoviesContext';

const SearchMovie = () => {
  const { onTitleChange } = useContext(MoviesContext);
  const titleChangeHandler = (e) => {
    onTitleChange(e.target.value);
  };

  return (
    <div className={classes.searchMovie}>
      <h2>Search Your Favourite Movie</h2>
      <Input
        className={classes.searchInput}
        config={{
          onChange: titleChangeHandler,
        }}
      />
    </div>
  );
};

export default SearchMovie;

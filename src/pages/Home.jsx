import React, { Fragment } from 'react';
import SearchMovie from '../components/search-movie/SearchMovie';
import MovieList from '../components/movie/MovieList';

const Home = () => {
  return (
    <Fragment>
      <section>
        <SearchMovie />
      </section>
      <main>
        <MovieList />
      </main>
    </Fragment>
  );
};

export default Home;

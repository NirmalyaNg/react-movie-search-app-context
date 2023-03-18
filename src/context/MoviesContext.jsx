import React, { useEffect, useState } from 'react';

export const MoviesContext = React.createContext({
  movies: [],
  onTitleChange: () => {},
  searchTitle: '',
  isLoading: false,
  error: null,
});

const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${movieTitle}&apikey=${
            import.meta.env.VITE_OMDB_API_KEY
          }`
        );
        const data = await response.json();
        if (data.Response === 'False') {
          throw new Error('Invalid Search Text');
        }
        setMovies(data.Search);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    const timer = setTimeout(() => {
      movieTitle && fetchMovies();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [movieTitle]);

  const onTitleChange = (title) => {
    setMovieTitle(title);
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        onTitleChange,
        searchTitle: movieTitle,
        isLoading,
        error,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

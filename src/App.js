import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import Movie from './movie/Movie';
import SearchBar from './movie/SearchBar';

function App() {
  const [movie, setMovie] = useState(null);
  const [movieLocalData, setMovieLocalData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const searchTermToApp = (searchBarInput) => { //callback from child
    setSearchTerm(searchBarInput);
  };

  useEffect(() => {
    //fetchDataFromAPI();
    fetchLocalData();
  }, [searchTerm]);

  useEffect(() => { //only for local, api will return only one movie and filter is done by api
    const foundMovieLocal = findMovieLocal(movieLocalData);
    setMovie(foundMovieLocal);
  }, [movieLocalData]);

  const findMovieLocal = (movieData) => {
    if(movieData){
      const result = movieData.filter(movie => movie.Title === searchTerm); //searchTerm is case sensitive
      return result;
    }
  }

  /*const fetchDataFromAPI = async () => {
    await fetch('omdb api with api key')
    .then(response => response.json())
    .then(data => setMovie(data))
    .catch((error) => {
      console.error('Error:', error);
    })
  }*/

  const fetchLocalData = async () => {
    await fetch('results.json', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
    .then((res) => res.json())
    .then((data) => setMovieLocalData(data))
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar searchTermToApp={searchTermToApp} />
        <Movie movie={movie} />
      </header>
    </div>
  );
}

export default App;

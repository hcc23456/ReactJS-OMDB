import React, { useState, useEffect } from 'react';

const SearchBar = ({ searchTermToApp }) => {

  return (
    <div>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search a movie</span>
        </label>
        <form action="/" method="get">  
            <input
                type="text"
                id="header-search"
                placeholder="Search a movie"
                onChange={event => searchTermToApp(event.target.value)}
            />
        </form>
    </div>
  );
}

export default SearchBar;

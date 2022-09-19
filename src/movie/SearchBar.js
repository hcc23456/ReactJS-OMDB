import React, { useState, useEffect } from 'react';

const SearchBar = ({ searchTermToApp }) => {
  /*const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (searchValue) => {
    setSearchTerm(searchValue);
    searchTermToApp(searchValue); //send to parent
  }*/

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
                //name="searchTerm" 
                //onChange={event => handleSearchTermChange(event.target.value)}
                onChange={event => searchTermToApp(event.target.value)}
                //value={searchTerm}
            />
        </form>
    </div>
  );
}

export default SearchBar;

import React, { useState, useEffect } from 'react';

const Movie = ({ movie }) => { //make sure props "name" is same as in parent
  const [poster, setPoster] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [showLabel, setShowLabel] = useState(false);
  
  useEffect(() => {
    if(movie && movie.length > 0){ 
        //movie[0] here because local data, api will never have this, only returns 1
        setPoster(movie[0].Poster);
        setTitle(movie[0].Title);
        setYear(movie[0].Year);
        setShowLabel(false);
    }
  }, [movie]);

  return (
    <div>
      <p>Movie poster:</p>
      <img 
      src={poster}
      onError={i => i.target.src=''} //hide broken url
      />
      <p>Title: {title}</p>
      <p>Release Year: {year}</p>
      <button onClick={() => setShowLabel(true)}>
        Display a label
      </button>
      {(showLabel)?<label>This is a label</label>:""}
    </div>
  );
}

export default Movie;

import React, { useState } from 'react';
import "./Search.scss";

function Search(props) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSearch(query);
  };

  return (
    <div className='search-container'>
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={query} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
    </div>
  );
}

export default Search;

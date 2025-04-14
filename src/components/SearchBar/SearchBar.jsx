import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(term);
  };

  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        placeholder="Enter a song, album, or artist"
        value={term}
        onChange={handleTermChange}
      />
      <button onClick={handleSearch}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
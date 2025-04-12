import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
    return (
        <div className={styles.SearchBar}>
            <input type='text' placeholder="Enter a song, album, or artist" />
            <button>SEARCH</button>
        </div>
    );
}

export default SearchBar;

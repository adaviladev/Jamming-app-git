import React from "react";
import styles from "./SearchResults.module.css";
import Track from "../Track/Track";


function SearchResults({ searchResults, onAdd }) {
    return (
        <div className={styles.SearchResults}>
            <h2>Search Results</h2>
            <div>
                {searchResults.map((track) => (
                    <Track
                        key={track.id}
                        name={track.name}
                        artist={track.artist}
                        album={track.album}
                        onAdd={() => onAdd(track)} // Pass the track to the onAdd function
                    />
                ))}
            </div>
        </div>
    )
}

export default SearchResults;

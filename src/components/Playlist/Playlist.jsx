import React from 'react';
import styles from './Playlist.module.css';

function Playlist() {
    return (
        <div className={styles.Playlist}>
            <h2>Playlist</h2>
            {/* Aquí se incluirá el componente Tracklist más adelante */}
            <input type="text" placeholder="New Playlist Name" />
            <button>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;

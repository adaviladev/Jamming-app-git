import React from 'react';
import styles from './Playlist.module.css';
import Track from '../Track/Track';

function Playlist({ playlistTracks }) {
    return (
        <div className={styles.Playlist}>
            <h2>Playlist</h2>
            <div>
                {playlistTracks.map((track) => (
                    <Track
                        key={track.id}
                        name={track.name}
                        artist={track.artist}
                        album={track.album}
                    />
                ))}
            </div>
            <input type="text" placeholder="New Playlist Name" />
            <button>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;

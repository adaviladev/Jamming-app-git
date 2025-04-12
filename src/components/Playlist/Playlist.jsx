import React from 'react';
import styles from './Playlist.module.css';
import Track from '../Track/Track';

function Playlist({ playlistTracks, playlistName, onRemove, onNameChange, onSave }) {
    const handleNameChange = (event) => {
        onNameChange(event.target.value);
    }
    
    return (
        <div className={styles.Playlist}>
            <input 
                type="text"
                value={playlistName}
                onChange={handleNameChange}
                placeholder='New Playlist Name'
            />
            <div>
                {playlistTracks.map((track) => (
                    <Track
                        key={track.id}
                        name={track.name}
                        artist={track.artist}
                        album={track.album}
                        onRemove={() => onRemove(track)}
                        isRemoval={true} // Indicate that this is for removal     
                    />
                ))}
            </div>
            <button onClick={onSave}>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;

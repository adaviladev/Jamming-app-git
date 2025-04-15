import React, { useEffect, useState } from 'react';
import Spotify from '../../util/Spotify';
import styles from './PlaylistList.module.css';

function PlaylistList({ onSelectPlaylist }) {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    Spotify.getUserPlaylists().then((playlists) => {
      setPlaylists(playlists);
    });
  }, []);

  return (
    <div className={styles.PlaylistList}>
      <h2>Your Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li
            key={playlist.id}
            onClick={() => onSelectPlaylist(playlist.id)}
            className={styles.PlaylistItem}
          >
            {playlist.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistList;
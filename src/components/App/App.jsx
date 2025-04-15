import React, { useState } from 'react';
import './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import PlaylistList from '../PlaylistList/PlaylistList';
import Spotify from '../../util/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistId, setPlaylistId] = useState(null);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (track) => {
    if (!playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((savedTrack) => savedTrack.id !== track.id));
  };

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((track) => `spotify:track:${track.id}`);
    Spotify.savePlaylist(playlistName, trackURIs, playlistId).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
      setPlaylistId(null); // Restablece el ID de la lista de reproducción
    });
  };

  const searchSpotify = (term) => {
    Spotify.search(term).then((results) => {
      setSearchResults(results);
    });
  };

  const selectPlaylist = (id) => {
    Spotify.getPlaylist(id).then((playlist) => {
      setPlaylistId(id);
      setPlaylistName(playlist.name);
      setPlaylistTracks(playlist.tracks);
    });
  };

  const createNewPlaylist = () => {
    setPlaylistId(null);
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
  };

  const goToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="App">
      <button onClick={goToHome} className="HomeButton">
        <h1>Jammming</h1>
      </button>
      <SearchBar onSearch={searchSpotify} />
      <PlaylistList onSelectPlaylist={selectPlaylist} />
      {searchResults.length > 0 && (
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
      )}
      <Playlist
        playlistId={playlistId}
        playlistName={playlistName}
        playlistTracks={playlistTracks}
        onRemove={removeTrack}
        onNameChange={setPlaylistName}
        onSave={savePlaylist}
      />
      <button onClick={createNewPlaylist}>Create New Playlist</button>
    </div>
  );
}

export default App;

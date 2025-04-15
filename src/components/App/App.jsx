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
    console.log('Saving Playlist ID:', playlistId);
    console.log('Saving Playlist Name:', playlistName);
    console.log('Saving Tracks:', trackURIs);
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
      console.log('Selected Playlist ID:', id);
      console.log('Selected Playlist Name:', playlist.name);
      console.log('Selected Playlist Tracks:', playlist.tracks);
      setPlaylistId(id);
      setPlaylistName(playlist.name);
      setPlaylistTracks(playlist.tracks);
    });
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <PlaylistList onSelectPlaylist={selectPlaylist} />
      <SearchBar onSearch={searchSpotify} />
      <SearchResults searchResults={searchResults} onAdd={addTrack} />
      <Playlist
        playlistId={playlistId}
        playlistName={playlistName}
        playlistTracks={playlistTracks}
        onRemove={removeTrack}
        onNameChange={setPlaylistName}
        onSave={savePlaylist}
      />
    </div>
  );
}

export default App;

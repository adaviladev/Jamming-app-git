import React from 'react';
import './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Tracklist from '../Tracklist/Tracklist';
import Track from '../Track/Track';



function App() {
  return (
    <div className="App">
      <h1>Jammming</h1>
      <p>Discover and create playlists</p>
      <SearchBar />
      <SearchResults />
      <Playlist />
      <Tracklist />
      <Track />
    </div>
  );
}

export default App;

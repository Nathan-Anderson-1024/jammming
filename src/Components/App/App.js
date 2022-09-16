import './App.css';
import React from 'react';

import {SearchResults} from '../SearchResults/SearchResults.js'
import {SearchBar} from '../SearchBar/SearchBar.js'
import {Playlist} from '../Playlist/Playlist.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'XO Tour LIif3',
          artist: 'Lil Uzi Vert',
          album: 'Luv is Rage',
          id: 0

        },
        {
          name: 'Donda',
          artist: 'Kayne West',
          album: 'Donda',
          id: 1
        },
        {
          name: 'Oxygin',
          artist: 'Witt Lowry',
          album: 'Nevers Road',
          id: 3
        },
        {
          name: 'Shake That',
          artist: 'Eminem',
          album: 'Curtain Call',
          id: 4
        }
      ],
      playlistName: 'Bangers Only',
      playlistTracks: [
        {
          name: 'XO Tour LIif3',
          artist: 'Lil Uzi Vert',
          album: 'Luv is Rage',
          id: 0
        },
        {
          name: 'Shake That',
          artist: 'Eminem',
          album: 'Curtain Call',
          id: 4
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span className='highlight'>mmm</span>ing</h1>
        <div className='App'>
          <SearchBar />
          <div className='App-playlist'>
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    )
  }
}


export default App;

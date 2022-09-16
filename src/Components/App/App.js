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
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}


export default App;

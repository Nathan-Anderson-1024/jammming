import './App.css';
import React from 'react';

import {SearchResults} from '../SearchResults/SearchResults.js'
import {SearchBar} from '../SearchBar/SearchBar.js'
import {Playlist} from '../Playlist/Playlist.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this)
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
  addTrack(track) {
    // console.log(this.state.playlistTracks)
    let tracks = this.state.playlistTracks
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track)
    }
    this.setState({
      playlistTracks: tracks
    })
  }
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
    this.setState({
      playlistTracks: tracks
    })
  }
  render() {
    return (
      <div>
        <h1>Ja<span className='highlight'>mmm</span>ing</h1>
        <div className='App'>
          <SearchBar />
          <div className='App-playlist'>
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}
                      onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    )
  }
}


export default App;

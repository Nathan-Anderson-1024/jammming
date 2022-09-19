import React from "react";
import './AllPlaylists.css'
import {IndividualP} from '../individualPlaylist/individualPlaylist.js'
export class AllPlaylists extends React.Component {
    render() {
        return (
            <div className="AllPlaylists">
                <h2>Your Playlists</h2>
                <button className="Playlist-save" onClick={this.props.onClick}>GET YOUR PUBLIC PLAYLISTS</button>
                {this.props.playlists.map(playlist => {
                    return <IndividualP playlist={playlist} key={playlist.id}/>
                })}
            </div>
        )
    }
}
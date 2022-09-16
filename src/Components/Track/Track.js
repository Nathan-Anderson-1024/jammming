import React from "react";
import './Track.css'
export class Track extends React.Component {
    constructor(props) {
        super(props)
        this.addTrack = this.addTrack.bind(this)
    }
    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action" onClick={this.addTrack}></button>
            // set to remove track
        }
        else {
            return <button className="Track-action" onClick={this.addTrack}></button>
            //keep as add track
        }
        
    }
    addTrack() {
        this.props.onAdd(this.props.track);
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3 key={this.props.track.id}>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <button className="Track-action" onClick={this.addTrack}>+</button>
            </div>
        )
    }
}
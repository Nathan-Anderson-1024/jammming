import React from "react";
import './Track.css'
export class Track extends React.Component {
    constructor(props) {
        super(props)
        this.addTrack = this.addTrack.bind(this)
        this.removeTrack = this.removeTrack.bind(this)
    }
    // renderAction() {
    //     // let isRemoval;
    //     // if (this.props.isRemoval) {
    //     //     isRemoval = true;
    //     //     return <button className="Track-action" onClick={this.props.onRemove}>-</button>
    //     //     // set to remove track
    //     // }
    //     // else {
    //     //     isRemoval = false;
    //     //     return <button className="Track-action" onClick={this.addTrack}>+</button>
    //     //     //keep as add track
    //     // }
        
    // }
    addTrack() {
        this.props.onAdd(this.props.track);
    }
    removeTrack() {
        this.props.onRemove(this.props.track)
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3 key={this.props.track.id}>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {!this.props.isRemoval && <button className="Track-action" onClick={this.addTrack}>+</button>}
                {this.props.isRemoval && <button className="Track-action" onClick={this.removeTrack}>-</button>}
            </div>
        )
    }
}
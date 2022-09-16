import React from "react";
import './Track.css'
export class Track extends React.Component {
    renderAction() {
        let isRemoval;
        if (isRemoval) {
            isRemoval = "-"
        }
        else if (!isRemoval) {
            isRemoval = "+"
        }
        
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3 key={this.props.track.id}>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <button className="Track-action">{this.renderAction}</button>
            </div>
        )
    }
}
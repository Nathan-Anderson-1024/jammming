import React from "react";

export class IndividualP extends React.Component{
    render() {
        return (
            <div>
                <h3 key={this.props.playlist.id}>{this.props.playlist.name}</h3>
            </div>
        )
    }
}
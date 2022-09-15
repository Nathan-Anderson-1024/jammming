import React from "react";

export class Track extends React.Component {
    renderAction() {
        let isRemoval;
        if (isRemoval) {
            isRemoval = "-"
        }
        else {
            isRemoval = "+"
        }
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>Track name will go here</h3>
                    <p>Track artist will go here | track album will go here</p>
                </div>
                <button className="Track-action">{this.renderAction}</button>
            </div>
        )
    }
}
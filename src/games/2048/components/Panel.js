import React from "react";

import Controller from "./Controller";

export default class Panel extends React.Component {
    render() {
        let { score, delay, audioMove, audioPopup } = this.props;
        return (
            <div className="b2048__panel">
                <div className="b2048__panel__info">
                    <h1>2048 Game</h1>
                    <p>Score: {score}</p>
                </div>
                <Controller
                    delay={delay}
                    audioMove={audioMove}
                    audioPopup={audioPopup}
                ></Controller>
            </div>
        );
    }
}

import React from "react";
import "../styles/gameStart";

export default class GameStart extends React.Component {
  state = {};
  render() {
    return (
      <div className="gameStart">
        <h1> Welcome to Beat the AI</h1>
        <button
          onClick={() => {
            this.props.startGame(2);
          }}
        >
          start playing{" "}
        </button>
      </div>
    );
  }
}

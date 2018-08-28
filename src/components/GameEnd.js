import React from "react";
import "../styles/gameStart";

export default class GameEnd extends React.Component {
  state = {
    win: true
  };
  render() {
    return (
      <div className="gameEnd">
        <p>{this.state.win && "Congrats!"}</p>
        <button>play again</button>
      </div>
    );
  }
}

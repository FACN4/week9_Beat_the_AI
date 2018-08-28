import React from "react";
import "../styles/gameEnd";
export default class GameEnd extends React.Component {
  state = {
    win: true
  };
  render() {
    return (
      <div className="gameEnd">
        <p>{this.state.win && "Gongrats!"}</p>
        <button>play again</button>
      </div>
    );
  }
}

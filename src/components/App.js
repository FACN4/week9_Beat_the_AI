import React from "react";
import GameEnd from "./GameEnd";
import GameStart from "./GameStart";
import GameBody from "./GameBody";

export default class App extends React.Component {
  state = {
    gameStatus: 1
    // Can be 1 or 2 or 3
  };
  nextPhase = phase => {
    this.setState(() => {
      return { gameStatus: phase };
    });
  };
  render() {
    const { gameStatus } = this.state;
    return (
      <React.Fragment>
        {gameStatus === 1 && <GameStart startGame={this.nextPhase} />}
        {gameStatus === 2 && <GameBody />}
        {gameStatus === 3 && <GameEnd />}
      </React.Fragment>
    );
  }
}

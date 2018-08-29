import React from "react";
import "../styles/gameStart";

export default class GameEnd extends React.Component {
  render() {
    const {changeAppState} = this.props
    return (
      <div className="gameEnd">
        <p>{true && "Congrats for winning!"}</p>
        <button onClick= {() => {changeAppState('gameStatus',1)}}>
          play again
        </button>
      </div>
    );
  }
}

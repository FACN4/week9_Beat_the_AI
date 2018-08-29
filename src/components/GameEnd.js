import React from "react";
import "../styles/gameStart";

export default class GameEnd extends React.Component {
  render() {
    const {changeAppState, gameResult} = this.props
    let message;
    switch(gameResult) {
      case 'win':
        message = 'Congrats on winning!';
        break;
      case 'loss':
        message =  'Sorry, you lost';
        break;
      case 'draw':
        message = 'Draw, try again';
        break;
    }
    return (
      <div className="gameEnd">
        <p>{message}</p>
        <button onClick= {() => {changeAppState('gameStatus',1)}}>
          play again
        </button>
      </div>
    );
  }
}

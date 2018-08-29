import React from "react";
import GameEnd from "./GameEnd";
import GameStart from "./GameStart";
import GameBody from "./GameBody";
import {winning} from "../logic/winning";

export default class App extends React.Component {
  state = {
    'gameStatus': 1, // Can be 1 or 2 or 3
    'gameMode': "easy", // Can be easy or hard
    'humanSymbol': "X" // Can be X or O
  };
  changeAppState = (stateKey,stateValue) => {
    this.setState((prevState) => {
      prevState[stateKey] = stateValue;
      return prevState[stateKey];
    })
  };
  aWin = (board, player) => {
    if (winning(board, player)){
      setTimeout( () => {
        this.setState(() => {
          return { 'gameStatus': 3 };
        });
      },500);
    }
  }
  render() {
    const { gameStatus } = this.state;
    return (
      <React.Fragment>
        {gameStatus === 1 && <GameStart changeAppState={this.changeAppState} />}
        {gameStatus === 2 && <GameBody aWin={this.aWin} humanSymbol={this.state.humanSymbol}/>}
        {gameStatus === 3 && <GameEnd changeAppState={this.changeAppState}/>}
      </React.Fragment>
    );
  }
}

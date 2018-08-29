import React from "react";
import GameEnd from "./GameEnd";
import GameStart from "./GameStart";
import GameBody from "./GameBody";
import {winning} from "../logic/winning";

export default class App extends React.Component {
  state = {
    'gameStatus': 1, // Can be 1 or 2 or 3
    'gameMode': "easy", // Can be easy or hard
    'humanSymbol': "X", // Can be X or O
    'gameResult': null //can be null or win, lose, draw
  };
  changeAppState = (stateKey,stateValue) => {
    this.setState((prevState) => {
      prevState[stateKey] = stateValue;
      return prevState[stateKey];
    })
  };
  aWin = (board, player) => {
    const remainingSpaces=board.filter( item => item !== "X" && item !== "O").length;
    const somebodyWins = winning(board, player)
    if (somebodyWins || remainingSpaces<1){
      let result;
      if (somebodyWins){
         result = player===this.state.humanSymbol? 'win':'loss';
      } else {
        result = 'draw'
      }
      setTimeout( () => {
        this.setState(() => {
          return { 'gameResult': result, 'gameStatus': 3 };
        });
      },500);
      return true;
    }
    return false;
  }
  render() {
    const { gameStatus, gameResult, humanSymbol, gameMode } = this.state;
    return (
      <React.Fragment>
        {gameStatus === 1 && <GameStart changeAppState={this.changeAppState} humanSymbol={humanSymbol} gameMode={gameMode}/>}
        {gameStatus === 2 && <GameBody aWin={this.aWin} humanSymbol={humanSymbol} gameMode={gameMode}/>}
        {gameStatus === 3 && <GameEnd changeAppState={this.changeAppState} gameResult={gameResult}/>}
      </React.Fragment>
    );
  }
}

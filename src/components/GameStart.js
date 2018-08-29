import React from "react";
import "../styles/gameStart";

export default class GameStart extends React.Component {
  state = {};
  render() {
    const {changeAppState} = this.props;
    return (
      <div className="gameStart">
        <h1> Welcome to Beat the AI</h1>
        <div>
          <p>Select your symbol</p>
          <button onClick={() => {
            changeAppState('humanSymbol','X');
          }}>X</button>
          <button onClick={() => {
            changeAppState('humanSymbol','O');
          }}>O</button>
        </div>
        <div>
          <p>Choose your mode</p>
          <button onClick={() => {
            changeAppState('gameMode','easy');
          }}>Easy Mode</button>
          <button onClick={() => {
            changeAppState('gameMode','hard');
          }}>Hard Mode</button>
        </div>
        <button
          onClick={() => {
            changeAppState('gameStatus',2);
          }}
        >
          start playing{" "}
        </button>
      </div>
    );
  }
}

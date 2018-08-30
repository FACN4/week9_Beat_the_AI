import React from "react";
import "../styles/gameStart";

export default class GameStart extends React.Component {
  state = {};
  render() {
    const {changeAppState, humanSymbol, gameMode} = this.props;
    const Xactive = humanSymbol==="X"? 'selectButton active': 'selectButton';
    const Oactive = humanSymbol==="O"? 'selectButton active': 'selectButton';
    const Eactive = gameMode==="easy"? 'selectButton active': 'selectButton';
    const Hactive = gameMode==="hard"? 'selectButton active': 'selectButton';
    return (
      <div className="gameStart">
        <h1> Welcome to Beat the AI</h1>
        <div>
          <p className="selectTitle">Select your symbol</p>
          <button className={Xactive} onClick={() => {
            changeAppState('humanSymbol','X');
          }}>X</button>
          <button className={Oactive} onClick={() => {
            changeAppState('humanSymbol','O');
          }}>O</button>
        </div>
        <div>
          <p className="selectTitle">Choose your mode</p>
          <button className={Eactive} onClick={() => {
            changeAppState('gameMode','easy');
          }}>Easy Mode</button>
          <button className={Hactive} onClick={() => {
            changeAppState('gameMode','hard');
          }}>Hard Mode</button>
        </div>
        <button className="startButton"
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

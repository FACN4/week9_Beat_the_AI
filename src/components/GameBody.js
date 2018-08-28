import React from "react";
import GridContainer from "./gameComponents/GridContainer";
import { Header } from "./gameComponents/Header";
import TurnLabel from "./gameComponents/TurnLabel";

export default class GameBody extends React.Component {
  state = {
    boardStatus: ["", "", "", "", "", "", "", "", ""],
    playerTurn: true
  };
  changeBoard = (index, symbol) => {
    console.log("hey");
    this.setState(function({ boardStatus }) {
      boardStatus[index] = symbol;
      //  console.log(boardStatus);
      return { boardStatus: boardStatus };
    });
  };
  render() {
    //console.log("rendering");
    const { boardStatus } = this.state;
    //console.log(boardStatus);

    return (
      <React.Fragment>
        <Header />
        <TurnLabel />
        <GridContainer
          boardStatus={boardStatus}
          changeBoard={this.changeBoard}
        />
      </React.Fragment>
    );
  }
}

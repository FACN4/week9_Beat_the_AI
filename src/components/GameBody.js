import React from "react";
import GridContainer from "./container/GridContainer";
import { Header } from "./gameComponents/Header";
import { TurnLabel } from "./gameComponents/TurnLabel";
import { aiTurn } from "../logic/aiTurn";

export default class GameBody extends React.Component {
  state = {
    boardStatus: ["", "", "", "", "", "", "", "", ""],
    humanTurn: true
  };
  changeTurn = () => {
    let { boardStatus, humanTurn } = this.state;
    const { humanSymbol, gameMode } = this.props;
    this.setState(
      prevState => {
        return { humanTurn: !prevState.humanTurn };
      },
      () => {
        if (!this.state.humanTurn) {
          console.log("should execute AITurn");
          const aiChoice = aiTurn(boardStatus, gameMode, humanSymbol);
          const aiSymbol = humanSymbol === "X" ? "O" : "X";
          setTimeout(() => {
            this.changeBoard(aiChoice, aiSymbol);
          }, 800);
        }
      }
    );
  };
  changeBoard = (index, symbol) => {
    this.setState(
      ({ boardStatus }) => {
        boardStatus[index] = symbol;
        return { boardStatus: boardStatus };
      },
      () => {
        const gameOver = this.props.aWin(this.state.boardStatus, symbol);
        if (!gameOver) {
          this.changeTurn();
        }
      }
    );
  };

  render() {
    const { boardStatus, humanTurn } = this.state;
    const { humanSymbol } = this.props;

    return (
      <React.Fragment>
        <Header />
        <TurnLabel humanTurn={humanTurn} />
        <GridContainer
          boardStatus={boardStatus}
          changeBoard={this.changeBoard}
          humanSymbol={humanSymbol}
          humanTurn={humanTurn}
        />
      </React.Fragment>
    );
  }
}

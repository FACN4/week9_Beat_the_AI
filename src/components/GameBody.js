import React from "react";
import GridContainer from "./gameComponents/GridContainer";
import { Header } from "./gameComponents/Header";
import TurnLabel from "./gameComponents/TurnLabel";
import { aiTurn } from "../logic/aiTurn";

export default class GameBody extends React.Component {
  state = {
    boardStatus: ["", "", "", "", "", "", "", "", ""],
    humanTurn: true
  };
  changeTurn = () => {
    let { boardStatus, humanTurn } = this.state;
    const { humanSymbol } = this.props;
    console.log(humanTurn);
    this.setState(
      (prevState) => {
        return { humanTurn: !prevState.humanTurn };
      },
      () => {
        if (!this.state.humanTurn) {
          console.log("should execute AITurn");
          const aiChoice = aiTurn(boardStatus);
          setTimeout( () => {this.changeBoard(aiChoice, 'O')},500);

        }
      }
    );
  };
  changeBoard = (index, symbol) => {
    this.setState(({ boardStatus }) => {
      boardStatus[index] = symbol;
      this.props.aWin(boardStatus, symbol);
      return { boardStatus: boardStatus };
    }, this.changeTurn);
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

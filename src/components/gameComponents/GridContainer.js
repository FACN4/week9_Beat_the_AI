import React from "react";
import GridItem from "./GridItem";
import "../../styles/gridContainer";

export default class Container extends React.Component {
  render() {
    const { boardStatus, changeBoard, humanSymbol, humanTurn } = this.props;
    let gridItems = [];
    for (let i = 0; i < 9; i++) {
      gridItems[i] = (
        <GridItem
          key={i}
          id={i}
          itemStatus={boardStatus[i]}
          changeBoard={changeBoard}
          humanSymbol={humanSymbol}
          humanTurn={humanTurn}
        />
      );
    }
    return <main className="gridContainer">{gridItems}</main>;
  }
}

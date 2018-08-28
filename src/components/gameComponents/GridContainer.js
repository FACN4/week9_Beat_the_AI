import React from "react";
import GridItem from "./GridItem";
import "../../styles/gridContainer";

export default class Container extends React.Component {
  render() {
    console.log("i am render?");
    const { boardStatus, changeBoard } = this.props;
    console.log(boardStatus);
    let gridItems = [];
    for (let i = 0; i < 9; i++) {
      gridItems[i] = (
        <GridItem
          key={i}
          id={i}
          itemStatus={boardStatus[i]}
          changeBoard={changeBoard}
        />
      );
    }
    return <main className="gridContainer">{gridItems}</main>;
  }
}

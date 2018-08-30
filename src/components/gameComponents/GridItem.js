import React from "react";
import "../../styles/gridItem";

export default class GridItem extends React.Component {
  state = {
    clickable: true
  };
  render() {
    const { changeBoard, id, itemStatus, humanSymbol, humanTurn } = this.props;
    return (
      <div
        className="gridItem"
        onClick={() => {
          if (itemStatus === "" && humanTurn) {
            changeBoard(id, humanSymbol);
          }
        }}
      >
        <span>{itemStatus}</span>
      </div>
    );
  }
}

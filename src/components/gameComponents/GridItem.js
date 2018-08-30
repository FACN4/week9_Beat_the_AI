import React from "react";
import "../../styles/gridItem";
import PropTypes from 'prop-types';

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

GridItem.propTypes = {
  changeBoard: PropTypes.func,
  id: PropTypes.number,
  itemStatus: PropTypes.string,
  humanSymbol: PropTypes.string,
  humanTurn: PropTypes.bool
}

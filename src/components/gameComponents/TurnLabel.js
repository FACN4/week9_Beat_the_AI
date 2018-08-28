import React from "react";
import "../../styles/turnLabel";

export default class TurnLabel extends React.Component {
  state = {
    playerTurn: true
  };
  render() {
    return (
      <h3 className="turnLabel">{this.state.playerTurn && "Your Turn"}</h3>
    );
  }
}

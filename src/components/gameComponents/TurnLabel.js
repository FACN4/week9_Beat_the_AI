import React from "react";
import "../../styles/turnLabel";

export default class TurnLabel extends React.Component {
  render() {
    const {humanTurn} = this.props;
    return (
      <h3 className="turnLabel">{humanTurn? "Your Turn": "AI Turn"}</h3>
    );
  }
}

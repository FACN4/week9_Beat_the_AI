import React from "react";
import "../../styles/turnLabel";

export default class TurnLabel extends React.Component {
  render() {
    const {humanTurn} = this.props;
    const turnClass = humanTurn? 'turnLabel human': 'turnLabel ai';
    return (
      <h3 className={turnClass}>{humanTurn? "Your Turn": "AI Turn"}</h3>
    );
  }
}

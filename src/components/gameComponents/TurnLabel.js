import React from "react";
import "../../styles/turnLabel";

export const TurnLabel = props => {
  const { humanTurn } = props;
  const turnClass = humanTurn ? "turnLabel human" : "turnLabel ai";
  return <h3 className={turnClass}>{humanTurn ? "Your Turn" : "AI Turn"}</h3>;
};

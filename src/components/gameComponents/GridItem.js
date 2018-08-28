import React from "react";
import "../../styles/gridItem";

export default class GridItem extends React.Component {
  state = {
    clickable: true
    //options are X or O or -
  };
  // componentWillMount = () => {
  //   this.setState(() => {
  //     return { option: this.props.itemStatus };
  //   });
  // };
  render() {
    const { changeBoard, id, itemStatus } = this.props;
    return (
      <div
        className="gridItem"
        onClick={() => {
          if (itemStatus === "") {
            changeBoard(id, "X");
          }
        }}
      >
        {this.props.itemStatus}
      </div>
    );
  }
}

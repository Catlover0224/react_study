import React, { Component } from "react";
import LifeCycleComponent from "./LifeCycleComponent";

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

class LifeCycleContaier extends Component {
  state = {
    color: "#000000",
  };

  onClickToChangeColor = () => {
    this.setState({
      color: getRandomColor(),
    });
    console.log("랜덤컬러 : ", this.state.color);
  };

  render() {
    return (
      <div>
        <LifeCycleComponent color={this.state.color}/>
        <button onClick={this.onClickToChangeColor}>색상변경</button>
      </div>
    );
  }
}

export default LifeCycleContaier;

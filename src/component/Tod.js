import React, { Component } from "react";

class Todo extends Component {
  render() {
    return <div>{this.props.task}</div>;
  }
}

export default Todo;

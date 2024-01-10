import React, { Component } from "react";
import Todo from "./Tod";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevTask: props.tasks.length,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.tasks.length != state.prevTask) {
      return { prevTask: props.tasks.length };
    }
    return null;
  }

  componentDidCatch(error, info) {
    this.setState({
      error: error,
      errorInfo: info,
    });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    const { tasks } = this.props;

    if (this.state.error) {
      // Fallback UI when an error occurs
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    if (!tasks || tasks.length === 0) {
      return <div>No tasks to display</div>;
    }

    // Intentionally throw an error to test componentDidCatch
    if (tasks.includes("error")) {
      throw new Error("Intentional error for testing componentDidCatch");
    }
    return (
      <div>
        {tasks.map((task, index) => (
          <Todo key={index} task={task} />
        ))}
      </div>
    );
  }
}

export default TodoList;

import React, { Component } from "react";
import TodoList from "./component/TodoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: ["Task1", "Task2", "Task3"],
      newTaskInput: "", // Added newTaskInput to the state to store the value of the new task input
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        tasks: ["task4", "task5", "task6"], // if includes "error" t5arjlk error f ui
      });
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      console.log("Tasks have been updated");
    }
  }

  handleAddTask = () => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, prevState.newTaskInput],
    }));
  };

  handleInputChange = (e) => {
    this.setState({ newTaskInput: e.target.value });
  };

  render() {
    const mystyle = {
      backgroundColor: "green",
    };
    return (
      <div>
        <input
          type="text"
          value={this.state.newTaskInput}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTask}>Add Task</button>
        <TodoList tasks={this.state.tasks} style={mystyle} />
      </div>
    );
  }
}

export default App;

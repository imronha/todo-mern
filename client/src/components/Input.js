import React, { Component } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
class Input extends Component {
  state = {
    action: "",
  };

  addTodo = () => {
    const task = { action: this.state.action };

    if (task.action && task.action.length > 0) {
      axios
        .post("/api/todos", task)
        .then((res) => {
          if (res.data) {
            this.props.getTodos();
            this.setState({ action: "" });
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log("input field required");
    }
  };

  handleChange = (e) => {
    this.setState({
      action: e.target.value,
    });
  };

  render() {
    let { action } = this.state;
    return (
      <div className="inputDiv">
        <input
          type="text"
          onChange={this.handleChange}
          value={action}
          placeholder="Enter Item"
        />
        <Button variant="contained" color="primary" onClick={this.addTodo}>
          Add Item
        </Button>
      </div>
    );
  }
}

export default Input;

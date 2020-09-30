import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";

class Todo extends Component {
  state = {
    todoText: "",
  };

  render() {
    return (
      <div className="todo">
        <div>
          <input
            type="text"
            value={this.state.todoText}
            onChange={this.onTextChanged}
            placeholder="Todo text"
          ></input>
          <button onClick={this.addTodo} className="btn btn-primary">
            Add
          </button>
        </div>

        <div className="list">
          {this.props.todos.map((t) => {
            return <div className="item">{t}</div>;
          })}
          <hr></hr>
          {this.getTodoCount()}
        </div>
      </div>
    );
  }

  getTodoCount = () => {
    let count = this.props.todos.length;
    if (count === 1) {
      return <label>We have 1 element in the list</label>;
    }
    return <label>We have {count} elements in the list</label>;
  };

  onTextChanged = (event) => {
    this.setState({ todoText: event.target.value });
  };

  addTodo = () => {
    if (this.state.todoText) {
      this.props.addTodo(this.state.todoText);
      this.setState({ todoText: "" });
    }
  };
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { addTodo })(Todo);

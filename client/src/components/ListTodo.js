import React from "react";
import { Button } from "@material-ui/core";
const ListTodo = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos && todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <li key={todo._id}>
              {todo.action}
              <Button
                color="secondary"
                variant="contained"
                onClick={() => deleteTodo(todo._id)}
              >
                Delete
              </Button>
            </li>
          );
        })
      ) : (
        <li>No todos! Everything is done! </li>
      )}
    </ul>
  );
};

export default ListTodo;

import React from "react";
import { TodoItem } from "./TodoItem";

export const todo = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div classsName="container" style={myStyle}>
      <h3 className="text-center my-3">Todo List</h3>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            return (
              <>
                <TodoItem todo={todo} onDelete={props.onDelete} />
                <hr />
              </>
            );
          })}
    </div>
  );
};

export default todo;

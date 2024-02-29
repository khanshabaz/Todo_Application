import React, { useContext } from "react";
import TodoItems from "./TodoItems";
import { TodoContext } from "../store/todoContext";

function DeleteTodo() {
  const { todoItems } = useContext(TodoContext);
  return (
    <div className="mt-2">
      {todoItems.map((item) => (
        <TodoItems
          inputName={item.name}
          inputDate={item.date}
          key={item.name}
        ></TodoItems>
      ))}
    </div>
  );
}

export default DeleteTodo;

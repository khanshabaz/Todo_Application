import React, { useContext, useRef, useState } from "react";
import { TodoContext } from "../store/todoContext";

function AddTodo() {
  const { addItems } = useContext(TodoContext);
  const itemTodo = useRef();
  const itemDate = useRef();

  const handleTodo = (event) => {
    event.preventDefault();
    const inputValue = itemTodo.current.value;
    const inputDate = itemDate.current.value;
    itemTodo.current.value = "";
    itemDate.current.value = "";
    addItems(inputValue, inputDate);
  };
  return (
    <div className="container">
      <form className="row" onSubmit={handleTodo}>
        <div className="col-6">
          <input
            className="form-control "
            type="text"
            ref={itemTodo}
            placeholder="Enter Todo"
          />
        </div>
        <div className="col-4">
          <input className="form-control" type="date" ref={itemDate} />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-outline-success text-white fw-bold add_btn"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

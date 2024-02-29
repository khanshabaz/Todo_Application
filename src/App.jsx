import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/AddTodo";
import { useContext, useState } from "react";
import DeleteTodo from "./components/DeleteTodo";
import Welcome from "./components/Welcome";
import { TodoContext } from "./store/todoContext";
import TodoName from "./components/TodoName";
function App() {
  const { todoItems } = useContext(TodoContext);
  return (
    <center className="mt-2">
      <TodoName />
      <AddTodo />
      {todoItems.length === 0 && <Welcome />}
      <DeleteTodo />
    </center>
  );
}

export default App;

import { createContext, useReducer } from "react";

export const TodoContext = createContext({
  todoItems: [],
  addItems: () => {},
  deleteItems: () => {},
});

const todoReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
    if (action.type === "ADD_ITEMS") {
      newTodoItems = [
        ...currentTodoItems,
        { name: action.payload.itemValue, date: action.payload.itemDate },
      ];
    } else if (action.type === "DELETE_ITEMS") {
      newTodoItems = currentTodoItems.filter(
        (item) => action.payload.todoItem !== item.name
      );
    }
    return newTodoItems;
  }

const TodoContextProvider = ({ children }) => {
  const [todoItems, dispatch] = useReducer(todoReducer, []);

  const addItems = (itemValue, itemDate) => {
    const addAction = {
      type: "ADD_ITEMS",
      payload: {
        itemValue,
        itemDate,
      },
    };
    dispatch(addAction);
  };
  const deleteItems = (inputValue) => {
    const deleteAction = {
      type: "DELETE_ITEMS",
      payload: { todoItem: inputValue },
    };
    dispatch(deleteAction);
  };
  return (
    <TodoContext.Provider value={{ todoItems, addItems, deleteItems }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

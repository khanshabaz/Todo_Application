import { useContext } from "react";
import { TodoContext } from "../store/todoContext";

function TodoItems({ inputName, inputDate }) {
  const { deleteItems } = useContext(TodoContext);
  return (
    <div className="container mt-2">
      <div className="row text-black text-start">
        <div className="col-6 ">
          <input className="form-control" placeholder={inputName} disabled />
        </div>
        <div className="col-4">
          <input className="form-control" placeholder={inputDate} disabled />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-outline-warning text-white  fw-bold add_btn"
            onClick={() => deleteItems(inputName)}
          >
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItems;

import React, { useState } from "react";
import Tasks from "./Tasks";

const AddTodo = () => {
  const [todo, setTodo] = useState({
    task: "",
  });

  const clear = () => {
    setTodo({
      task: "",
    });
  };

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clear();
    console.log(todo);
  };
  return (
    <>
      <form
        className="container"
        autoComplete="off"
        style={{ marginTop: "30px" }}
        onSubmit={handleSubmit}
      >
        <legend>
          <h4>Add To do</h4>
        </legend>
        <div className="form-group">
          <label htmlFor="task">To do</label>
          <input
            type="text"
            className="form-control"
            id="task"
            aria-describedby="emailHelp"
            value={todo.task}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form> 
    </>
  );
};

export default AddTodo;

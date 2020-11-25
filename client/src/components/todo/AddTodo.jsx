import React, { useState } from "react";
import { addTodo } from "../../actions/todo";
import { useDispatch, useSelector } from "react-redux";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState({
    todo: "",
    done: false,
  });

  const clear = () => {
    setTodos({
      todo: "",
      done: false,
    });
  };

  const handleChange = (e) => {
    setTodos({
      ...todos,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todos));
    clear();
    console.log(todos);
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
          <label htmlFor="todo">To do</label>
          <input
            type="text"
            className="form-control"
            id="todo"
            aria-describedby="emailHelp"
            value={todos.todo}
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

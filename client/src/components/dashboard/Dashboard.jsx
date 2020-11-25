import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";

// import {getTodos} from '../../actions/todo'

import AddTodo from "../todo/AddTodo";
import Todos from "../todo/Todos";

const Dashboard = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTodos());
  // }, [dispatch])
  return (
    <>
      <AddTodo />
      <Todos />
    </>
  );
};

export default Dashboard


import React from "react";
import AddTodo from "../tasks/AddTodo";
import Tasks from "../tasks/Tasks";

const Dashboard = () => {
  return (
    <>
      <AddTodo />
      <Tasks />
    </>
  );
};

export default Dashboard;

import React from "react";
import AddTodo from "../todo/AddTodo";
import Todos from "../todo/Todos";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Dashboard = ({ uid }) => {
  if (!uid) return <Redirect to="/signin" />;
  return (
    <>
      <AddTodo />
      <Todos />
    </>
  );
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};

export default connect(mapStateToProps)(Dashboard);

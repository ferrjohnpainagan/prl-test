import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Todos = ({todos}) => {

  return (
    <>
      <table className="table container" style={{ marginTop: "30px" }}>
        <thead>
          <tr className="text-info">
            <th scope="col">Todo</th>
            <th scope="col">Added on</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        {todos && todos.filter(todos => todos.done === false).map((todos, id) => (
            <Todo todos={todos} key={id} />
          ))
          }
          
        </tbody>
        <thead>
          <tr className="text-info">
            <th scope="col">Done</th>
            <th scope="col">Added on</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos && todos.filter(todos => todos.done === true).map((todos, id) => (
            <Todo todos={todos} key={id} />
          ))
          }
          
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const todos = state.firestore.ordered.todos;
  return {
    todos: todos,
    uid: state.firebase.auth.uid
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "todos",
      // where: ["authorId", "==", ownProps.uid],
      // orderBy: ["date", "desc"],
    },
  ])
)(Todos);

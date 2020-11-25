import React from "react";
import moment from 'moment'
import { useDispatch } from "react-redux";
import {removeTodo, updateTodo} from '../../actions/todo'

const Todo = ({ todos }) => {
const time = moment(todos.date.toDate()).calendar()
  const dispatch = useDispatch()
  return (
    <>
      <tr>
        <th scope="row">{todos.todo} </th>
        <td>{time}</td>
        <td>
          {todos.done ? (<span className="material-icons text-success" style={{ cursor: "pointer" }} onClick={() => {
            if(!todos.done) {
              dispatch(updateTodo(todos))
            } 
          }}>
            check_circle
          </span>) : (<span className="material-icons" style={{ cursor: "pointer" }} onClick={() => {
            if(!todos.done) {
              dispatch(updateTodo(todos))
            } 
          }}>
            check_circle
          </span>)}

          
        </td>
        <td>
          <span className="material-icons text-danger" style={{ cursor: "pointer" }} onClick={() => dispatch(removeTodo(todos))} >
            delete
          </span>
        </td>
      </tr>
    </>
  );
};

export default Todo;

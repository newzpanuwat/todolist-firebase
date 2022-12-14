import React from "react";
import firebase from "../utils/firebase";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { tableCellStyle } from "../utils/customCss";

// css
import "../App.css";

export default function Todo({ todo, idx }) {
  const getTodoRef = (todo) => {
    return firebase.database().ref("Todo").child(todo.id);
  };

  const deleteTodo = () => {
    const todoRef = getTodoRef(todo);
    todoRef.remove();
  };

  const completeTodo = () => {
    const todoRef = getTodoRef(todo);
    todoRef.update({
      complete: !todo.complete,
    });
  };

  return (
    <>
      <TableRow key={idx}>
        <TableCell sx={tableCellStyle}>
          <button className="complete-btn" onClick={completeTodo}>
            <span>{!todo.complete ? "Mark" : "Undo"}</span>
          </button>
          &nbsp;
          <button className="delete-btn" onClick={deleteTodo}>
            <span>Del</span>
          </button>
        </TableCell>
        <TableCell>
          <span className={todo.complete ? "complete" : ""}>{todo.title}</span>
        </TableCell>
        <TableCell align="center" sx={{ width: "15%" }}>
          {todo.complete ? <i className="bi bi-check-circle-fill"></i> : <></>}
        </TableCell>
      </TableRow>
    </>
  );
}

import React, { useState } from "react";
import firebase from "../utils/firebase";

function Form() {
  const [title, setTitle] = useState();

  const handleChange = (e) => setTitle(e.target.value);

  const createTodo = () => {
    if (!title) return alert("Please select a title");

    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      complete: false,
    };

    todoRef.push(todo);
  };

  return (
    <div>
      <label htmlFor="title">
        <h1>Todolist Example</h1>
      </label>
      <br />
      <input id="title" type="text" onChange={handleChange} value={title} />
      <button className="add-btn" onClick={createTodo}>
        Add
      </button>
    </div>
  );
}

export default Form;

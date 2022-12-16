import React, { useRef, useContext } from "react";
import Styles from "./NewTodo.module.css";

import { TodoContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodoContext);

  //function --------
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      //throw a error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <label htmlFor="text"> Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button> Add Todo</button>
    </form>
  );
};

export default NewTodo;

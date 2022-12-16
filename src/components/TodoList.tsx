import React from "react";
// import Todo from "../models/todo"
import Styles from "./TodosList.module.css";

const TodoList: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={Styles.list} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoList;

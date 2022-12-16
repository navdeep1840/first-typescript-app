import React, { useContext } from "react";

import TodoList from "./TodoList";
import Styles from "./Todos.module.css";

import { TodoContext } from "../store/todos-context";
// type Props = { items: string[]; children };

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodoContext);
  return (
    <ul className={Styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoList
          text={item.text}
          key={item.id}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

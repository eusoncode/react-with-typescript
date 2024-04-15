import React from "react";
import { TodoListItems } from "../interfaces/todoInterfaces";
import './TodoList.css';

// Return Todolist
const TodoList: React.FC<TodoListItems> = ({items, onDeleteTodo}) => {
  return (
    <ul>
      {items.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          {/* <button onClick={() => {onDeleteTodo(todo.id)}}>DELETE TODO</button> */}
          <button onClick={onDeleteTodo.bind(null, todo.id)}>DELETE TODO</button>
        </li>)
      )}
    </ul>
  );
};

export default TodoList;
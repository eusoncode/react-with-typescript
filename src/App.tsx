import React, {useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './interfaces/todoInterfaces';
// import { Route } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (todoItem: string) => {
    setTodos(prevTodos => [...prevTodos,{id: Math.random().toString(), text: todoItem}])  
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });    
  };
  
  
  console.log(todos);
  
  return (
    <div className="App">
      {/* A component that adds todos */}
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;

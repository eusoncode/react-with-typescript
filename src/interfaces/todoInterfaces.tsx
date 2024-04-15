// Define based types
export interface Todo {
  id: string,
  text: string
};

export interface TodoFC {
  (todoText: string): void;
}

export interface TodoDL {
  (todoId: string): void;
}

// Define secondary types
export interface TodoListItems {
  items: Todo[];
  onDeleteTodo: TodoDL
};

export interface newTodoProps{
  // onAddTodo: (todoText: string) => void;
  onAddTodo: TodoFC;
}
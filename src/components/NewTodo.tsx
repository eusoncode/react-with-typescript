// import React, { useState } from 'react';

// const NewTodo: React.FC = () => {
//   const [text, setText] = useState<string>('');

//   const todoSubmitHandler = (event: React.FormEvent) => {
//     event.preventDefault();
//     console.log(text);
//   };

//   const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setText(event.target.value);
//   };

//   return (
//     <form onSubmit={todoSubmitHandler}>
//       <div>
//         <label htmlFor="todo-text">Todo Text</label>
//         <input type="text" id="todo-text" value={text} onChange={textChangeHandler} />
//       </div>
//       <button type="submit">ADD TODO</button>
//     </form>
//   );
// };

// export default NewTodo;


// OR use useRef

import React, { useRef } from 'react';
import { newTodoProps } from '../interfaces/todoInterfaces';
import './NewTodo.css';

const NewTodo: React.FC<newTodoProps> = ({onAddTodo}) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (!enteredText || !isNaN(+enteredText)) {
      alert('Please a valid value');
      return;
    }
    onAddTodo(enteredText);
    textInputRef.current!.value = ''; // Clear the input field
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;

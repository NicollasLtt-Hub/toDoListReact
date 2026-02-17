import React from 'react';
import { ToDoItem } from '../ToDoItem/ToDoItem';

export function ToDoList({ toDos, onToggleTodo, onDeleteTodo }) {
  return (
    <div className='todo-list'>
      {toDos.map((todo) => (
        <ToDoItem todo={todo} key={todo.id} onToggle={onToggleTodo} onDelete={onDeleteTodo} />
      ))}
    </div>
  );
}

import React from 'react';
import { ToDoItem } from '../ToDoItem/ToDoItem';

export function ToDoList({ toDos, onToggleTodo, onDeleteTodo }) {
  if (toDos.length === 0) {
    return (
      <div className='todo-list'>
        <p className='empty-message'>Nenhuma tarefa adicionada ainda!</p>
      </div>
    );
  }

  return (
    <div className='todo-list'>
      {toDos.map((todo) => (
        <ToDoItem todo={todo} key={todo.id} onToggle={onToggleTodo} onDelete={onDeleteTodo} />
      ))}
    </div>
  );
}

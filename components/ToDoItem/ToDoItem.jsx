import React from 'react';

export function ToDoItem({ todo, onToggle, onDelete }) {
  return (
    <div className='todo-content'>
      <input
        type='checkbox'
        className='todo-checkobox'
        checked={todo.completed}
        onChange={() => onToggle()}
      />
      <span className='todo-text'>{todo.text}</span>

      <button className='delete-btn' onClick={() => onDelete()}>
        Remover
      </button>
    </div>
  );
}

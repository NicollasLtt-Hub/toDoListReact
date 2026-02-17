import React, { useState } from 'react';
import './index.css';
import './App.css';
import { AddToDo } from './components/AddToDo/AddToDo';
import { ToDoList } from './components/ToDoList/ToDoList';

export function App() {
  const [toDos, setToDos] = useState([
    { id: 1, text: 'Exemplo de Tarefa', completed: false },
    { id: 2, text: 'Aprender React', completed: false },
  ]);

  const addToDo = (text) => {
    const newToDo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setToDos([...toDos, newToDo]);
  };

  return (
    <div className='container'>
      <h1 className='app-title'>Lista de Tarefas</h1>
      <AddToDo onAddTodo={addToDo} />
      <ToDoList toDos={toDos} />
    </div>
  );
}

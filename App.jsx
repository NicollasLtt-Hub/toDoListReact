import React from 'react';
import './index.css';
import './App.css';
import { AddToDo } from './components/AddToDo';

export function App() {
  return (
    <div className='container'>
      <h1 className='app-title'>Lista de Tarefas</h1>
      <AddToDo onAddTodo={() => {}} />
    </div>
  );
}

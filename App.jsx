import React, { useEffect, useState } from 'react';
import './index.css';
import './App.css';
import { AddToDo } from './components/AddToDo/AddToDo';
import { ToDoList } from './components/ToDoList/ToDoList';

export function App() {
  const [toDos, setToDos] = useState([
    { id: 1, text: 'Exemplo de Tarefa', completed: false },
    { id: 2, text: 'Aprender React', completed: false },
  ]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setToDos(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = (text) => {
    const newToDo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setToDos([...toDos, newToDo]);
  };

  const deleteToDo = (id) => {
    setToDos(toDos.filter((toDos) => toDos.id !== id));
  };

  const toggleTodo = (id) => {
    setToDos(
      toDos.map((toDo) => (toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo)),
    );
  };

  return (
    <div className='container'>
      <h1 className='app-title'>Lista de Tarefas</h1>
      <AddToDo onAddTodo={addToDo} />
      <ToDoList toDos={toDos} onDeleteTodo={deleteToDo} onToggleTodo={toggleTodo} />
    </div>
  );
}

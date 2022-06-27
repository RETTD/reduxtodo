import React from 'react';
 import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import { useAppSelector } from './app/hooks';

function App() {
const todoList =  useAppSelector((state) => state.todos.todoList)

  return (
    <div className="app">
      <div className='app__container'>
        <div className='app__todoContainer'>
          {

            todoList.map((item)=> (
              <TodoItem name={item.name}
              done={item.done}
              id={item.id}
              />
            ))
          }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;

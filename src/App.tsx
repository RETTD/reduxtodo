import React from 'react';
 import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

const todoList = [{
  item: '123',
  done: false,
  id: 1
},
{
  item: '1234',
  done: false,
  id: 2
}
]

function App() {
const todoList: Array<any> =  useSelector(selectTodoList)

  return (
    <div className="app">
      <div className='app__container'>
        <div className='app__todoContainer'>
          {

            todoList.map(item=> (
              <TodoItem name={item.item}
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

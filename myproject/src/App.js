import './App.css';
import Home from './modules/Home';
import Forma from './modules/Forma';
import { createElement, useState } from 'react';
import HelloWorldComponent from './modules/HelloWorldComponent';
import MyClassComponent from './modules/MyClassComponent';
import MyToDo from './modules/MyToDo';
import RenderComponent from './modules/RenderComponent';
import MyToDoClass from './modules/MyToDoClass';


function App() {
  const [item, setItem] = useState(['First element']) // [item, setItem]
  const [input, setInput] = useState('');

  const onClickHandler = (input) => {
    const updateElement = [...item, input];

    setItem(updateElement);
    setInput('');
  };

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const element = createElement('h1',
  { className: 'greeting' },
  'Hello')

  return (
    <div>
      {element}
      < HelloWorldComponent />
      < MyClassComponent />
      < Home />
      < Forma />
      <input type="text" value={input} onChange={onChangeHandler} />
      <ul>
        {item.map((element, index) => <li key={index}>{element} {index}</li>)}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add New Element</button>
      <MyToDo />
      <RenderComponent />
      <MyToDoClass />
    </div>
    
  );
}

export default App;

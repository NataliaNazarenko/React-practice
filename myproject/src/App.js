import './App.css';
import Home from './modules/Home';
import Forma from './modules/Forma';
import { createElement, useState, useEffect } from 'react';
import HelloWorldComponent from './modules/HelloWorldComponent';
import MyClassComponent from './modules/MyClassComponent';
import MyToDo from './modules/MyToDo';
import RenderComponent from './modules/RenderComponent';
import MyToDoClass from './modules/MyToDoClass';
import UnmountComponent from './modules/UnmountComponent';


function App() {
  const [item, setItem] = useState(['First element']) // [item, setItem]
  const [input, setInput] = useState('');
  const [isShowTimer, setIsShowTimer] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  

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

  useEffect(() => {
    console.log('I am useEffect - componentDidMount');
  }, []);
  
  useEffect(() => {
    console.log('I am useEffect - componentDidUpdate');
  }, [item]);
  
  useEffect(() => {
    console.log('I am useEffect - componentDidUpdate');
  }, [input]);

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
      
      <RenderComponent />
      {isShowTimer ?  <MyToDoClass /> : <MyToDo />}
      <button onClick={() => setIsShowTimer((prev) => !prev)}>Show Timer</button>
      {isMounted ? <UnmountComponent /> : <p>Text</p>}
      <button onClick={() => setIsMounted((prev) => !prev)}>Unmount</button>
     
    </div>
    
  );
}

export default App;

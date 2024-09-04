import { useState, useEffect, useRef, createElement } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Імпорти компонентів
import Home from './modules/Home';
import Forma from './modules/Forma';
import HelloWorldComponent from './modules/HelloWorldComponent';
import MyClassComponent from './modules/MyClassComponent';
import MyToDo from './modules/MyToDo';
import RenderComponent from './modules/RenderComponent';
import MyToDoClass from './modules/MyToDoClass';
import UnmountComponent from './modules/UnmountComponent';
import Counter from './modules/Counter';
import MyMemoHook from './modules/MyMemoHook';
import MyUseCallbackHook from './modules/MyUseCallbackHook';
import MyChildComponent from './modules/MyChildComponent';
import SecondChildComponent from './modules/SecondChildComponent';
import HomePage from './modules/pages/HomePage';
import About from './modules/pages/About';
import ContactsPage from './modules/pages/ContactsPage';
import NotFound from './modules/pages/NotFound';

// Імпорти утиліт, хуків, API
import { useCounter } from './modules/useCounter';

// import useFetch from './modules/hooks/useFetch';

// Імпорти стилізованих компонентів
import ControlledForm from './modules/components/ControlledForms/ControlledForm';

const styles = {
  containerGreen: { color: 'green', fontSize: 30 },
  containerBlue: { color: 'blue', fontSize: 30 }
};

function App() {
  // Стан
  const [item, setItem] = useState(['First element']);
  const [input, setInput] = useState('');
  const [isShowTimer, setIsShowTimer] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isData, setData] = useState(["one", "two", "three", "four"]);
  const [color, setColor] = useState(false);
  const [value, setValue] = useState('');

  const headerRef = useRef();
  const inputRef = useRef();

  const { counter, increment, decrement } = useCounter();
  // const { data: contacts, loading } = useFetch('contacts');

  // Ефекти
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  useEffect(() => {
    console.log('Item updated');
  }, [item]);

  useEffect(() => {
    console.log('Input updated');
  }, [input]);

  // Обробники
  const onClickHandler = (input) => {
    setItem([...item, input]);
    setInput('');
  };

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const handleFocus = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  const changeColor = () => {
    setColor(!color);
  };


  const handlerClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/contacts' state={{from: "Home"}}>Contacts</Link>
          <Link to='/about'>About</Link>
          <Link to='/form'>Forma</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Forma />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {/* <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Forma />} />
          <Route path="/timer" element={
            <div>
              <button className="toggle-timer-btn" onClick={() => setIsShowTimer(!isShowTimer)}>Toggle Timer</button>
              {isShowTimer && <Counter />}
            </div>
          } />
          <Route path="/render" element={<RenderComponent />} />
          <Route path="/to-do" element={
            <div>
              <button className="toggle-mount-btn" onClick={() => setIsMounted(!isMounted)}>Toggle Mount</button>
              {isMounted && <MyToDo />}
            </div>
          } />
          <Route path="/unmount" element={<UnmountComponent />} />
          <Route path="/counter-hook" element={
            <div>
              <button className="counter-btn" onClick={increment}>Increment</button>
              <button className="counter-btn" onClick={decrement}>Decrement</button>
              <p>Counter: {counter}</p>
            </div>
          } />
        </Routes>
      </main> */}
          
      <div className="App-header" ref={headerRef}>
        <p style={color ? styles.containerBlue : styles.containerGreen}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="color-btn" onClick={changeColor}>Change Color</button>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </div>

      {createElement('h1', { className: 'greeting' }, 'Hello')}
      <HelloWorldComponent />
      <MyClassComponent />
      <input type="text" value={input} onChange={onChangeHandler} className="input-field" />
      <ul>
        {item.map((element, index) => <li key={index}>{element} {index}</li>)}
      </ul>
      <button className="add-data-btn" onClick={() => onClickHandler(input)}>Add New Element</button>
      <RenderComponent />
      {isShowTimer ? <MyToDoClass /> : <MyToDo />}
      <button className="toggle-timer-btn" onClick={() => setIsShowTimer(!isShowTimer)}>Show Timer</button>
      {isMounted ? <UnmountComponent /> : <p>Text</p>}
      <button className="toggle-mount-btn" onClick={() => setIsMounted(!isMounted)}>Unmount</button>
      <p>Say Hello - {value}</p>
      <button className="hello-btn" onClick={handlerClick}>Hello</button>
      <Counter />
      <input type="text" ref={inputRef} className="input-field" />
      <button className="focus-btn" onClick={handleFocus}>Focus me</button>
      <MyMemoHook />
      <MyUseCallbackHook />
      <SecondChildComponent />
      {isData.map((item, index) => (
        <MyChildComponent item={item} key={index} />
      ))}
      <button className="add-data-btn" onClick={() => setData([...isData, 6])}>On Click</button>
      <p>{counter}</p>
      <button className="counter-btn" onClick={increment}>+</button>
      <button className="counter-btn" onClick={decrement}>-</button>
      <ControlledForm />
    </div>
  );
}

export default App;
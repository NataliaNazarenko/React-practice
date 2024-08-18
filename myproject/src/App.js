// Імпорти бібліотек
import { useState, useEffect, useRef, createElement } from 'react';
import { Routes, Route } from 'react-router-dom';
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

// Імпорти утиліт, хуків, API
import { useCounter } from './modules/useCounter';
import { getContactsList, addContact, deleteContact, updateContact } from './modules/api/api';
import useFetch from './modules/hooks/useFetch';

// Імпорти стилізованих компонентів
import ControlledForm from './modules/components/ControlledForms/ControlledForm';
import Loader from './modules/components/Loader/Loader';

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
  const [value, setValue] = useState(0);
  const [isData, setData] = useState(["one", "two", "three", "four"]);
  const [color, setColor] = useState(false);
  const [isContacts, setContacts] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);

  const headerRef = useRef();
  const inputRef = useRef();

  const { counter, increment, decrement } = useCounter();
  const { data: contacts, loading, error } = useFetch('contacts');

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

  const addContacts = async () => {
    setIsPostLoading(true);
    const newContact = { name: 'John Doe', lastName: 'Doe', about: 'I am a new contact' };
    const addedContact = await addContact(newContact);
    setContacts([...isContacts, addedContact]);
    setIsPostLoading(false);
  };

  const deleteContactHandler = async (id) => {
    await deleteContact(id);
    setContacts(isContacts.filter(contact => contact.id !== id));
  };

  const editContact = async (id) => {
    const newContact = { name: 'Sharma', lastName: 'Doe', about: 'I am a new contact' };
    const updatedContact = await updateContact(id, newContact);
    setContacts(isContacts.map(contact => contact.id === id ? updatedContact : contact));
  };

  // Визначення обробника кліку
  const handlerClick = () => {
    console.log('Button clicked');
  };

  // JSX
  return (
    <div style={{ padding: 30, backgroundColor: 'gray' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Forma />} />
        <Route path="/timer" element={
          <div>
            <button onClick={() => setIsShowTimer(!isShowTimer)}>Toggle Timer</button>
            {isShowTimer && <Counter />}
          </div>
        } />
        <Route path="/render" element={<RenderComponent />} />
        <Route path="/to-do" element={
          <div>
            <button onClick={() => setIsMounted(!isMounted)}>Toggle Mount</button>
            {isMounted && <MyToDo />}
          </div>
        } />
        <Route path="/unmount" element={<UnmountComponent />} />
        <Route path="/counter-hook" element={
          <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>Counter: {counter}</p>
          </div>
        } />
      </Routes>

      <div>
        <h1>Contacts</h1>
        <ul>
          {loading ? (
            <Loader loading={loading} />
          ) : (
            isContacts.map((contact) => (
              <li key={contact.id}>
                {contact.name} {contact.lastName} - {contact.about}
                <button onClick={() => deleteContactHandler(contact.id)}>Delete</button>
                <button onClick={() => editContact(contact.id)}>Update</button>
              </li>
            ))
          )}
        </ul>
        <button onClick={addContacts} disabled={isPostLoading}>
          {isPostLoading ? 'Loading...' : 'Add'}
        </button>
      </div>

      <header className="App-header" ref={headerRef}>
        <p style={color ? styles.containerBlue : styles.containerGreen}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={changeColor}>Change Color</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {createElement('h1', { className: 'greeting' }, 'Hello')}
      <HelloWorldComponent />
      <MyClassComponent />
      <input type="text" value={input} onChange={onChangeHandler} />
      <ul>
        {item.map((element, index) => <li key={index}>{element} {index}</li>)}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add New Element</button>
      <RenderComponent />
      {isShowTimer ? <MyToDoClass /> : <MyToDo />}
      <button onClick={() => setIsShowTimer(!isShowTimer)}>Show Timer</button>
      {isMounted ? <UnmountComponent /> : <p>Text</p>}
      <button onClick={() => setIsMounted(!isMounted)}>Unmount</button>
      <p>Say Hello - {value}</p>
      <button onClick={handlerClick}>Hello</button>
      <Counter />
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus me</button>
      <MyMemoHook />
      <MyUseCallbackHook />
      <SecondChildComponent />
      {isData.map((item, index) => (
        <MyChildComponent item={item} key={index} />
      ))}
      <button onClick={() => setData([...isData, 6])}>On Click</button>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <ControlledForm />
    </div>
  );
}

export default App;
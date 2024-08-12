import './App.css';
import Home from './modules/Home';
import Forma from './modules/Forma';
import { createElement, useState, useEffect, useRef } from 'react';
import HelloWorldComponent from './modules/HelloWorldComponent';
import MyClassComponent from './modules/MyClassComponent';
import MyToDo from './modules/MyToDo';
import RenderComponent from './modules/RenderComponent';
import MyToDoClass from './modules/MyToDoClass';
import UnmountComponent from './modules/UnmountComponent';
import Counter from './modules/Counter';
import MyMemoHook from './modules/MyMemoHook';
import MyUseCallbackHook from './modules/MyкUseCallbackHook';
import MyChildComponent from './modules/MyChildComponent';
import SecondChildComponent from './modules/SecondChildComponent';
import { useCounter } from './modules/useCounter';
import ControlledForm from './modules/components/ControlledForms/ControlledForm'
import Loader from './modules/components/Loader/Loader';
import {getContactsList, addContact, deleteContact} from './modules/api/api';
import useFetch from './modules/hooks/useFetch';

const styles = {
  containerGreen: {
    color: 'green',
    fontSize: 30,
  },

  containerBlue: {
    color: 'blue',
    fontSize: 30,
  }
};


function App() {
  const [item, setItem] = useState(['First element']) // [item, setItem]
  const [input, setInput] = useState('');
  const [isShowTimer, setIsShowTimer] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [value, setValue] = useState(0);
  const [isData, setData] = useState(["one", "two", "three", "four"]);
  const headerRef = useRef();
  const inputRef = useRef();
  console.log(headerRef);
  const {counter, increment, decrement} = useCounter();
  const [color, setColor] = useState(false);
  const [isContacts, setContacts] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);

  const {data: contacts, loading, error} = useFetch('contacts');

  useEffect(() => {
      setContacts(contacts);
  }, [contacts]);
  
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

  const handlerClick = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleFocus = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  const changeColor = () => {
    setColor(!color);
  };

  if(error) {
    return <div>Error: {error}</div>
  };

  const addContacts = async () => {
    setIsPostLoading(true);
    const newContact = {name: 'John Doe', LastName: 'Doe', about: 'I am a new contact'};
    const addedContact = await addContact(newContact);
    setContacts([...isContacts, addedContact]);
    setIsPostLoading(false);
  };

  const deleteContactHandler = async (id) => {
    await deleteContact(id);
    setContacts(isContacts.filter(contact => contact.id !== id));
  };

  return (
    <div style={{padding: 30, backgroundColor: 'gray'}}>

      <div>
        <h1>Contacts</h1>
        <ul>
          {loading ? (
            <Loader loading={loading} />
          ) : (
            isContacts.map((contact) => (
              <li key={contact.id}>
                {contact.name} {contact.LastName} - {contact.about}
                <button onClick={() => deleteContactHandler(contact.id)}>Delete</button>
              </li>
            ))
          )}
      </ul>
        <button onClick={addContacts} disabled={isPostLoading}>{isPostLoading ? 'Loading...' : 'Add'}</button>
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
      <p>Say Hello - {value}</p>
      <button onClick={handlerClick}>Hello</button>
      <Counter />
      <input type="text" ref={inputRef}/>
      <button onClick={handleFocus}>Focus me</button>
      <MyMemoHook />
      <MyUseCallbackHook />
      <SecondChildComponent />
      {isData.map((item, index) => {return (
      <MyChildComponent item={item} key={index}/>
      )})}
      <button onClick = {() => setData([...isData, 6])}>On Click</button>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <ControlledForm />

    </div>
    
  );
}

export default App;

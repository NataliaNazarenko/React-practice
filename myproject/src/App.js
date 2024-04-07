import './App.css';
import Home from './modules/Home';
import Forma from './modules/Forma';
import { createElement } from 'react';
import HelloWorldComponent from './modules/HelloWorldComponent';
import MyClassComponent from './modules/MyClassComponent';


function App() {
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
    </div>
  );
}

export default App;

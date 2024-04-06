import './App.css';
import Home from './modules/Home';
import Forma from './modules/Forma';
import { createElement } from 'react';
import HelloWorldComponent from './modules/HelloWorldComponent';


function App() {
  const element = createElement('h1',
  { className: 'greeting' },
  'Hello')
  return (
    <div>
      {element}
      < HelloWorldComponent />
      < Home />
      < Forma />
    </div>
  );
}

export default App;

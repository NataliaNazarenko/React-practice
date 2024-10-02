import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {
//   QueryClient,
//   QueryClientProvider,
// } from 'react-query'
import {BrowserRouter} from "react-router-dom";
// import {createRoot} from "react-dom/client";


// const queryClient = new QueryClient()
const contextValue = "Hello World";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <QueryClientProvider client={queryClient}></QueryClientProvider>  при використанні бібліотеки react-query, необхідно обгорнути в QueryClientProvider основний компонент App
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";


const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <QueryClientProvider client={queryClient}></QueryClientProvider>  при використанні бібліотеки react-query, необхідно обгорнути в QueryClientProvider основний компонент App
    <BrowserRouter>
    <React.StrictMode>
       <App />
    </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();

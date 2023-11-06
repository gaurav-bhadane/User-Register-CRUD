import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
// import ContextProvider from './Components/context/ContextProvider';



const root = ReactDOM.createRoot(document.getElementById('root')).render(<App />);
root.render(
  // <ContextProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    // </ContextProvider>
    ,
    document.getElementById('root')
);

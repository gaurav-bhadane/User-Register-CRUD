import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Register from './Components/Register';
import Edit from './Components/Edit';
import Details from './Components/Details';



function App() {
  return (
   <>
   <Navbar/>
  
   <Router>
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/view/:id" element={<Details />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;

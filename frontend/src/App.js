import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Buy from './components/Buy';
import Register from './components/Register';
import './App.css';
import Nav from './components/Nav';
import Details from './components/Details';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/buy" element={<Buy />}></Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

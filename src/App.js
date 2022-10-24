import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import Nav from './component/nav';
import Login from './component/login';
import Register from './component/register';
import {AuthProvider} from './context/AuthProvider';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nav" element={<Nav />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
   );
  }
}
  
export default App;

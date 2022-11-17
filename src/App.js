import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import Nav from './component/nav';
import Signin from './component/signin';
import { AuthContextProvider } from './context/AuthContext';

class App extends Component {
  render() {
    return (
      <AuthContextProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nav" element={<Nav />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </Router>
    </AuthContextProvider>
   );
  }
}
  
export default App;

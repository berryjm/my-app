import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import Nav from './component/nav';

class App extends Component {
  render() {
    return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nav" element={<Nav />} />
      </Routes>
    </Router>
   );
  }
}
  
export default App;

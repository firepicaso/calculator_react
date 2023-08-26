import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Math Magicians</h1>
          <nav>
            <ul className="nav-list">
              <li>
                <Link className="nav-text" to="/">Home</Link>
              </li>
              <li>|</li>
              <li>
                <Link className="nav-text" to="/calculator">Calculator</Link>
              </li>
              <li>|</li>
              <li>
                <Link className="nav-text" to="/quote">Quote</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </Router>
  );
}

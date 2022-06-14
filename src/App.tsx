// Global Imports
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Files imports
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';

// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

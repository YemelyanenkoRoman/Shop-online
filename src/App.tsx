import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Burger } from './components/Navigation/Burger';
import { Navbar } from './components/Navigation/Navbar';
import { Main } from './pages/Main';

function App() {
  return (
    <>
      <Router>
        <Burger />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

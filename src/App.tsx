import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navigation/Navbar';
import { Main } from './pages/Main';

import GlobalStyles from './globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="category" element={<Main />} />
          <Route path="category/:id" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navigation/Navbar';
import { Main } from './pages/Main/Main';

import GlobalStyles from './globalStyles';
import { GoodsCards } from './pages/GoodsCards/GoodsCards';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="category/:id" element={<GoodsCards />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

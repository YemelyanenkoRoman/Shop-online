import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navigation/Navbar';
import { GoodsCards } from './pages/GoodsCards/GoodsCards';
import GlobalStyles from './globalStyles';
import { ShoppingCart } from './pages/ShoppingCart/ShoppingCart';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="category/:id" element={<GoodsCards />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

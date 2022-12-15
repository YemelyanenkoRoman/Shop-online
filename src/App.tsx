import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Burger } from './components/Navigation/Burger';
import { Main } from './pages/Main';

import GlobalStyles from './globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Burger />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Home from './components/Home/Home';
import Cgv from './components/Cgv/Cgv';
import MentionsLegales from './components/MentionsLegales/MentionsLegales';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/cgv" element={<Cgv/>} />
        <Route exact path="/mentions-legales" element={<MentionsLegales/>} />
      </Routes>
    </Router>
  );
}

export default App;

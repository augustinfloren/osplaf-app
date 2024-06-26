import React, { useEffect } from 'react';
import { LoadingProvider } from './components/Home/Loading/LoadingContext';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Home from './components/Home/Home';
import Cgv from './components/Cgv/Cgv';
import MentionsLegales from './components/MentionsLegales/MentionsLegales';
import NotFound from './components/NotFound';

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
      <LoadingProvider>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/cgv" element={<Cgv/>} />
          <Route exact path="/mentions-legales" element={<MentionsLegales/>} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </LoadingProvider>
    </Router>
  );
}

export default App;

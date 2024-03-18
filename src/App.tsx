//App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import NoMatch from './pages/NoMatch';
import CardList from './components/CardList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/jobs" element={<CardList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

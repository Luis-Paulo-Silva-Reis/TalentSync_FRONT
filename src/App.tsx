//App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import NoMatch from './pages/NoMatch';
import Jobs from './pages/Jobs';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/jobs" element={<Jobs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

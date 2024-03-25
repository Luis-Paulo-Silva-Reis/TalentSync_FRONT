//App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NoMatch from "./pages/NoMatch";
import Jobs from "./pages/Jobs";
import CompanySpace from "./pages/CompanySpace";
import Faq from "./pages/Faq";
import ContactPage from "./pages/ContactPage";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import CompanyForm from "./pages/CompanyForm";
import UserForm from "./pages/UserForm";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/CompanySpace" element={<CompanySpace />} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/User" element={<UserForm />} />
          <Route path="/Company" element={<CompanyForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

//Layoyt.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Layout.css";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header logoUrl={""} />
      <main className="main">
        <Outlet />
      </main>
      <Footer logoUrl={""} />
    </div>
  );
};

export default Layout;

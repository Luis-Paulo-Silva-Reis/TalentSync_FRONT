import React from "react";
import "../styles/Header.css";

import logoUrl from '../assets/logo.png'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoUrl} alt="Logo" />
      </div>
      <div className="buttons">
        <button> Candidato </button>
        <button> Empresa </button>
      </div>
    </header>
  );
};

export default Header;

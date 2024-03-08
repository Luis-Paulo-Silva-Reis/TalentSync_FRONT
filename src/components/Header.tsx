import React from "react";
import "../styles/Header.css";

interface HeaderProps {
  logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
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

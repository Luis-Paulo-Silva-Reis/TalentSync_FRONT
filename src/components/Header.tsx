import React from "react";
import "../styles/Header.css";
import logoUrl from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <header className="header">
      <div className="logo">
        <button onClick={handleClick}>
          <img src={logoUrl} alt="Logo" />
        </button>
      </div>
      <div className="buttons">
        <button> Candidato </button>
        <button> Empresa </button>
      </div>
    </header>
  );
};

export default Header;

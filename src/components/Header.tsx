import React from "react";
import "../styles/Header.css";
import logoUrl from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  const handleClickUser = () => {
    navigate("/User");
  };
  const handleClickCompany = () => {
    navigate("/Company");
  };

  return (
    <header className="header">
      <div className="logo">
        <button onClick={handleClick}>
          <img src={logoUrl} alt="Logo" />
        </button>
      </div>
      <div className="buttons">
        <button onClick={handleClickUser}> Candidato </button>
        <button onClick={handleClickCompany}> Empresa </button>
      </div>
    </header>
  );
};

export default Header;

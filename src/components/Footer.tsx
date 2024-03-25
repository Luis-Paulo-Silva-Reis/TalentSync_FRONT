import React from "react";
import "../styles/Footer.css";
import logoUrl from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleClickFaq = () => {
    navigate("/FAQ");
  };
  const handleClickContact = () => {
    navigate("/Contact");
  };
  const handleClickBlog = () => {
    navigate("/Blog");
  };
  const handleClickAbout = () => {
    navigate("/About");
  };

  return (
    <footer className="footer">
      <div className="logo">
        <img src={logoUrl} alt="Logo" />
      </div>
      <div className="footer-texto">
        <p>&copy; 2024 TalentSync. Todos os direitos reservados.</p>
      </div>
      <ul>
        <li>
          <button onClick={handleClickFaq}>faq</button>
        </li>
        <li>
          <button onClick={handleClickContact}>contato</button>
        </li>
        <li>
          <button onClick={handleClickBlog}>blog</button>
        </li>
        <li>
          <button onClick={handleClickAbout}>sobre</button>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

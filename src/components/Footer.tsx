import React from "react";
import "../styles/Footer.css";
import logoUrl from '../assets/logo.png';


function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logoUrl} alt="Logo" />
      </div>
      <div className="footer-texto">
        <p>&copy; 2024 TalentSync. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

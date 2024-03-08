import React from "react";
import "../styles/Footer.css";

interface FooterProps {
  logoUrl: string;
}

const Footer: React.FC<FooterProps> = ({ logoUrl }) => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logoUrl} alt="Logo" />
      </div>
      <div>
        <p>&copy; 2024 TalentSync. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

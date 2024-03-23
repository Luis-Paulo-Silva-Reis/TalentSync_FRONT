import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface CompanyData {
  id: string;
  companyName: string;
  companyWebSite: string;
  companyCNPJ: string;
  companyAbout: string;
  companyPresentation: string;
  companyType: string;
  companyFoundationDate: string;
  companyAmountEmployers: string;
  companyRemotePolitcs: string;
  companySocialMidiaFacebook: string;
  companySocialMidiaX: string;
  companySocialMidiaLinkedIn: string;
  companySocialMidiaInstagram: string;
  companySocialMidiaTiktok: string;
  companySocialMidiaYouTube: string;
  companyBanner: string;
  password: string | null;
  email: string | null;
}

function CompanySpace(): JSX.Element {
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);

  useEffect(() => {
    // Recupera o token do local storage
    const token = localStorage.getItem("token");

    if (token) {
      // Decodifica o token JWT para obter as informações dele
      const decodedToken = jwtDecode(token) as { companyId: string };

      // Extrai o ID da empresa do token decodificado
      const companyId = decodedToken.companyId;

      // Envia o ID da empresa para buscar os detalhes da empresa
      fetchCompanyData(companyId);
    }
  }, []);

  const fetchCompanyData = async (companyId: string) => {
    try {
      // Realiza uma solicitação ao backend para buscar os detalhes da empresa
      const response = await fetch(
        `http://localhost:5162/Company/${companyId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        const data: CompanyData = await response.json();
        setCompanyData(data);
      } else {
        console.error("Erro ao buscar dados da empresa:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao buscar dados da empresa:", error.message);
    }
  };

  return (
    <>
      {companyData ? (
        <div>
          <h2>Detalhes da Empresa</h2>
          <p>Nome da Empresa: {companyData.companyName}</p>
          <p>Email da Empresa: {companyData.email}</p>
          <p>cnpj da Empresa: {companyData.companyCNPJ}</p>
          {/* Adicione mais detalhes da empresa conforme necessário */}
        </div>
      ) : (
        <p>Carregando dados da empresa...</p>
      )}
    </>
  );
}

export default CompanySpace;

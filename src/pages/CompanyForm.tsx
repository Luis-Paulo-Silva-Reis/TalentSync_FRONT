import React, { useState } from "react";
import CompanyRegister from "./CompanyLogin";

function CompanyForm() {
  const [mostrarFormularioA, setMostrarFormularioA] = useState(true);
  const [formType, setFormType] = useState("Login");

  function toggleFormulario() {
    setMostrarFormularioA(!mostrarFormularioA);

    setFormType(mostrarFormularioA ? "Login" : "Cadastro" );
  }

  return (
    <div>
      <button onClick={toggleFormulario}>
        {formType}
      </button>
      {mostrarFormularioA ? <CompanyRegister /> : <FormularioB />}
    </div>
  );
}

function FormularioB() {
  return <div>Conteúdo do Formulário B Company</div>;
}

export default CompanyForm;

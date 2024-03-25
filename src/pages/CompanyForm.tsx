import React, { useState } from 'react';

function CompanyForm() {
  // Estado para controlar qual formulário mostrar
  const [mostrarFormularioA, setMostrarFormularioA] = useState(true);

  // Função para alternar entre os formulários
  function toggleFormulario() {
    setMostrarFormularioA(!mostrarFormularioA);
  }

  return (
    <div>
      <button onClick={toggleFormulario}>
        Trocar Formulário
      </button>
      {mostrarFormularioA ? (
        <FormularioA />
      ) : (
        <FormularioB />
      )}
    </div>
  );
}

function FormularioA() {
  return <div>Conteúdo do Formulário A Company</div>;
}

function FormularioB() {
  return <div>Conteúdo do Formulário B Company</div>;
}

export default CompanyForm;

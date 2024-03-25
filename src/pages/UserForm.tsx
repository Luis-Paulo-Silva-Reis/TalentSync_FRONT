import React, { useState } from "react";

function UserForm() {
  // Estado para controlar qual formulário mostrar
  const [mostrarFormularioA, setMostrarFormularioA] = useState(true);

  // Função para alternar entre os formulários
  function toggleFormulario() {
    setMostrarFormularioA(!mostrarFormularioA);
  }

  return (
    <div>
      <button onClick={toggleFormulario}>Trocar Formulário</button>
      {mostrarFormularioA ? <FormularioA /> : <FormularioB />}
    </div>
  );
}

function FormularioA() {
  return <div>Conteúdo do Formulário A User</div>;
}

function FormularioB() {
  return <div>Conteúdo do Formulário B User</div>;
}

export default UserForm;

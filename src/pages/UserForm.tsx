import React, { useState } from "react";
import UserRegistrationForm from "./UserRegistrationForm";

function UserForm() {
  const [mostrarFormularioA, setMostrarFormularioA] = useState(true);
  const [formType, setFormType] = useState("Login");

  function toggleFormulario() {
    setMostrarFormularioA(!mostrarFormularioA);

    setFormType(mostrarFormularioA ? "Login" : "Cadastro");
  }

  return (
    <div>
      <button onClick={toggleFormulario}>{formType}</button>
      {mostrarFormularioA ? <UserRegistrationForm /> : <FormularioB />}
    </div>
  );
}


function FormularioB() {
  return <div>Conteúdo do Formulário B User</div>;
}

export default UserForm;

//UserRegistrationForm
import React from "react";
import { useRegistrationForm } from "../hooks/useRegistrationForm";

const initialState = {
  id: "",
  nome: "",
  sobrenome: "",
  dateOfBirthString: "",
  email: "",
  telefone: "",
  pais_origem: "",
  cpf: "",
  genero: "",
  pcd: "",
  linkedIn: "",
  cidade: "",
  estado: "",
  pais: "",
};

const UserRegistrationForm: React.FC = () => {
  const { formData, handleChange, handleSubmit } =
    useRegistrationForm(initialState);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        required
        value={formData.nome}
        onChange={handleChange}
        placeholder="Nome"
      />
      <input
        type="text"
        name="sobrenome"
        required
        value={formData.sobrenome}
        onChange={handleChange}
        placeholder="Sobrenome"
      />
      <input
        type="date"
        name="dateOfBirthString"
        required
        value={formData.dateOfBirthString}
        onChange={handleChange}
        placeholder="Data de Nascimento"
      />
      <input
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="telefone"
        required
        value={formData.telefone}
        onChange={handleChange}
        placeholder="Telefone"
      />
      <input
        type="text"
        name="pais_origem"
        required
        value={formData.pais_origem}
        onChange={handleChange}
        placeholder="País de Origem"
      />
      <input
        type="text"
        name="cpf"
        required
        value={formData.cpf}
        onChange={handleChange}
        placeholder="CPF"
      />
      <input
        type="text"
        name="genero"
        required
        value={formData.genero}
        onChange={handleChange}
        placeholder="Gênero"
      />
      <input
        type="text"
        name="pcd"
        required
        value={formData.pcd}
        onChange={handleChange}
        placeholder="PCD"
      />
      <input
        type="text"
        name="linkedIn"
        value={formData.linkedIn}
        onChange={handleChange}
        placeholder="LinkedIn"
      />
      <input
        type="text"
        name="cidade"
        required
        value={formData.cidade}
        onChange={handleChange}
        placeholder="Cidade"
      />
      <input
        type="text"
        name="estado"
        required
        value={formData.estado}
        onChange={handleChange}
        placeholder="Estado"
      />
      <input
        type="text"
        name="pais"
        required
        value={formData.pais}
        onChange={handleChange}
        placeholder="País"
      />

      <button type="submit">Registrar</button>
    </form>
  );
};

export default UserRegistrationForm;

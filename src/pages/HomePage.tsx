import "../styles/HomePage.css";
import NestedSelect, { Option } from "../components/SearchJob";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/jobs");
  };
  const profissoes: Option[] = [
    { value: "Programador", label: "Programador" },
    { value: "Desenvolvedor", label: "Desenvolvedor" },
  ];

  const tipos: { [key: string]: Option[] } = {
    Programador: [
      { value: "Front", label: "Front" },
      { value: "Back", label: "Back" },
      { value: "fullStack", label: "Full Stack" },
    ],
  };

  const levels: { [key: string]: Option[] } = {
    Level: [
      { value: "Trainee", label: "Trainee" },
      { value: "Estagiario", label: "Estagiário" },
      { value: "Freelancer", label: "Freelancer" },
      { value: "junior", label: "Junior" },
      { value: "pleno", label: "Pleno" },
      { value: "senior", label: "Senior" },
      { value: "Especialista", label: "Especialista" },
      { value: "Especialista+", label: "Especialista+" },
    ],
  };

  const TipoLocal: { [key: string]: Option[] } = {
    tiposDeLocal: [
      {
        value: "remoto",
        label: "remoto",
      },
      {
        value: "hibrido",
        label: "hibrido",
      },
      {
        value: "presencial",
        label: "presencial",
      },
    ],
  };

  const estados: { [key: string]: Option[] } = {
    ESTADOS: [
      { value: "AC", label: "Acre" },
      { value: "AL", label: "Alagoas" },
      { value: "AP", label: "Amapá" },
      { value: "AM", label: "Amazonas" },
      { value: "BA", label: "Bahia" },
      { value: "CE", label: "Ceará" },
      { value: "DF", label: "Distrito Federal" },
      { value: "ES", label: "Espírito Santo" },
      { value: "GO", label: "Goiás" },
      { value: "MA", label: "Maranhão" },
      { value: "MT", label: "Mato Grosso" },
      { value: "MS", label: "Mato Grosso do Sul" },
      { value: "MG", label: "Minas Gerais" },
      { value: "PA", label: "Pará" },
      { value: "PB", label: "Paraíba" },
      { value: "PR", label: "Paraná" },
      { value: "PE", label: "Pernambuco" },
      { value: "PI", label: "Piauí" },
      { value: "RJ", label: "Rio de Janeiro" },
      { value: "RN", label: "Rio Grande do Norte" },
      { value: "RS", label: "Rio Grande do Sul" },
      { value: "RO", label: "Rondônia" },
      { value: "RR", label: "Roraima" },
      { value: "SC", label: "Santa Catarina" },
      { value: "SP", label: "São Paulo" },
      { value: "SE", label: "Sergipe" },
      { value: "TO", label: "Tocantins" },
    ],
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function getCidadesFromAPI(estado: any): Promise<Option[]> {
    try {
      const response = await getCidades(estado); // Use a função getCidades para obter as cidades do IBGE
      const cidadesOptions = response.map((cidade: string) => ({
        value: cidade,
        label: `${cidade} presencial`,
      }));
      return cidadesOptions;
    } catch (error) {
      console.error("Erro ao obter as cidades:", error);
      return [];
    }
  }

  const PCD: { [key: string]: Option[] } = {
    PCD: [
      { value: "Sim", label: "Sim" },
      { value: "Não", label: "Não" },
    ],
  };

  const [selectedCategoria, setSelectedCategoria] = useState<string>("");
  const [selectedTipo, setSelectedTipo] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedTipoLocal, setSelectedTipoLocal] = useState<string>("");
  const [selectedEstados, setSelectedEstados] = useState<string>("");
  const [selectedLocal, setSelectedLocal] = useState<string>("");
  const [selectedPCD, setSelectedPCD] = useState<string>("");

  selectedEstados;

  const Local: { [key: string]: Promise<Option[]> } = {
    presencial: getCidadesFromAPI(selectedEstados), // Substitua 'MG' pelo código do estado desejado
    hibrido: getCidadesFromAPI(selectedEstados), // Substitua 'SP' pelo código do estado desejado
    remoto: Promise.resolve([{ value: "Remoto", label: "Remoto" }]), // Mantenha a definição original para o caso 'remoto'
  };

  const handleCategoriaChange = (value: string) => {
    setSelectedCategoria(value);
    setSelectedTipo("");
    setSelectedLevel("");
    setSelectedTipoLocal("");
    setSelectedLocal("");
    setSelectedPCD("");
  };

  const handleTipoChange = (value: string) => {
    setSelectedTipo(value);
  };

  const handleLevelChange = (value: string) => {
    setSelectedLevel(value);
  };

  const handleTipoLocalChange = (value: string) => {
    setSelectedTipoLocal(value);
  };

  const handleEstadosChange = (value: string) => {
    setSelectedEstados(value);
  };

  const handleLocalChange = (value: string) => {
    setSelectedLocal(value);
  };

  const handlePcdChange = (value: string) => {
    setSelectedPCD(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      categoria: selectedCategoria,
      tipo: selectedTipo,
      level: selectedLevel,
      tiposDeLocal: selectedTipoLocal,
      estado: selectedEstados,
      local: selectedLocal,
      pcd: selectedPCD,
    };

    console.log("Dados do formulário:", formData);
  };

  async function getCidades(estado: string): Promise<string[]> {
    try {
      const response = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const cidades = response.data.map((cidade: any) => cidade.nome);
      return cidades;
    } catch (error) {
      console.error("Erro ao obter as cidades:", error);
      return [];
    }
  }

  return (
    <div className="HomePage">
      <header>
        <h1>Bem-vindo ao TalentSync</h1>
        <p>
          O melhor lugar para encontrar oportunidades de emprego na área de
          tecnologia.
        </p>
      </header>
      <main>
        <section className="home-page">
          <h2>Descubra sua Próxima Oportunidade Profissional</h2>
          <h2>Como Funciona?</h2>
          <h2>Uma Nova Abordagem para Encontrar Empregos</h2>
          <p>
            Muitas vezes, diferentes nomes são usados para descrever as mesmas
            vagas. É por isso que decidimos simplificar a busca e a oferta de
            empregos.
          </p>
          <p>
            Para cadastrar uma vaga em nossa plataforma, siga algumas regras
            simples que serão apresentadas em um menu suspenso em nosso
            formulário de cadastro.
          </p>
          <p>Vamos dar um exemplo:</p>
          <p>
            Programador/Desenvolvedor - Front-end/Back-end/Full-stack -
            Estagiário/Júnior/Pleno/Sênior - Presencial (cidade)/Híbrido
            (cidade)/Remoto - PCD/Não PCD
          </p>

          <section className="home-page">
            <form className="home-page-form" onSubmit={handleSubmit}>
              <NestedSelect
                label="Profissão"
                options={profissoes}
                onChange={handleCategoriaChange}
              />
              {selectedCategoria && (
                <>
                  <NestedSelect
                    label="Posição"
                    options={tipos[selectedCategoria]}
                    onChange={handleTipoChange}
                  />
                  <NestedSelect
                    label="Level"
                    options={levels.Level}
                    onChange={handleLevelChange}
                  />

                  <NestedSelect
                    label="Local"
                    options={TipoLocal.tiposDeLocal}
                    onChange={handleTipoLocalChange}
                  />

                  {selectedTipoLocal === "presencial" ||
                    (selectedTipoLocal === "hibrido" && (
                      <NestedSelect
                        label="ESTADOS"
                        options={estados.ESTADOS}
                        onChange={handleEstadosChange}
                      />
                    ))}
                  {selectedTipoLocal === "presencial" && (
                    <NestedSelect
                      label="Presencial"
                      options={Local.presencial}
                      onChange={handleLocalChange}
                    />
                  )}
                  {selectedTipoLocal === "hibrido" && (
                    <NestedSelect
                      label="Hibrido"
                      options={Local.hibrido}
                      onChange={handleLocalChange}
                    />
                  )}

                  <NestedSelect
                    label="PCD ?"
                    options={PCD.PCD}
                    onChange={handlePcdChange}
                  />
                </>
              )}

              <button type="submit" onClick={handleClick}>
                Buscar
              </button>
            </form>
          </section>

          <p>
            E assim evitamos te termos varias vagas para as mesmas possicoes com
            nomes difentes, Pode Ser algo mais simples, assim você encontra
            atamente o que procura. as mesmas regras para buscar as vagas são
            usadas para cadastrar as vagas.
          </p>

          <p>Tudo aqui e gratis</p>
        </section>
      </main>
    </div>
  );
}

export default Homepage;

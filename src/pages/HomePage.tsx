import "../styles/HomePage.css";
import NestedSelect, { Option } from "../components/SearchJob"; // Importando o componente NestedSelect
import { useState } from "react";
import CardList from "../components/CardList";

function Homepage() {
  const categorias: Option[] = [
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

  const Local: { [key: string]: Option[] } = {
    presencial: [
      { value: "BH", label: "Belo Horizonte presencial" },
      { value: "SP", label: "São Paulo presencial" },
      // Adicione mais opções de cidades aqui, se necessário
    ],
    hibrido: [
      { value: "BH", label: "Belo Horizonte hibrido" },
      { value: "SP", label: "São Paulo hibrido" },
      // Adicione mais opções de cidades aqui, se necessário
    ],
    remoto: [{ value: "Remoto", label: "Remoto" }],
  };

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
  const [selectedLocal, setSelectedLocal] = useState<string>("");
  const [selectedPCD, setSelectedPCD] = useState<string>("");

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
  const handleLocalChange = (value: string) => {
    setSelectedLocal(value);
  };

  const handlePcdChange = (value: string) => {
    setSelectedPCD(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Categoria selecionada:", selectedCategoria);
    console.log("Tipo selecionado:", selectedTipo);
    console.log("Level selecionado:", selectedLevel);
    console.log("tipos de Local selecionado:", selectedTipoLocal);
    console.log("Local selecionado:", selectedLocal);
    console.log("PCD selecionado:", selectedPCD);
  };

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
          <h2>Encontre seu próximo emprego</h2>
          <h2>Como funciona ? </h2>
          <h2>Bom, temos uma pespectiva diferente sobre o assunto</h2>
          <p>
            Muitas vezes temos varios nomes para as mesmas vagas, e por isso
            decimos pronizar como procurar
          </p>
          <p>
            E por isso para cadastrar algo na nossa plataforma você precisa
            seguir algumas regras que seram postas em um select em nosso
            formulario de cadastro
          </p>
          <p>Vamos a uma exemplo</p>
          <p>
            Programador/desenvolvedor - Front/Back/fullStack -
            Treine/estagiario/freelancer/junior/pleno/senior - presencial(nome
            da cidade)/Hibrido(Nome da cidade)/remoto - PCD/Não PCD
          </p>

          <section className="home-page">
            <form onSubmit={handleSubmit}>
              <NestedSelect
                options={categorias}
                onChange={handleCategoriaChange}
              />
              {selectedCategoria && (
                <>
                  <NestedSelect
                    options={tipos[selectedCategoria]}
                    onChange={handleTipoChange}
                  />
                  <NestedSelect
                    options={levels.Level}
                    onChange={handleLevelChange}
                  />

                  <NestedSelect
                    options={TipoLocal.tiposDeLocal}
                    onChange={handleTipoLocalChange}
                  />
                  {selectedTipoLocal === "presencial" && (
                    <NestedSelect
                      options={Local.presencial}
                      onChange={handleLocalChange}
                    />
                  )}
                  {selectedTipoLocal === "hibrido" && (
                    <NestedSelect
                      options={Local.hibrido}
                      onChange={handleLocalChange}
                    />
                  )}

                  <NestedSelect options={PCD.PCD} onChange={handlePcdChange} />
                </>
              )}
              <button type="submit">Buscar</button>
            </form>
          </section>

          <p>
            E assim evitamos te termos varias vagas para as mesmas possicoes com
            nomes difentes, Pode Ser algo mais simples.
          </p>
        </section>
        <section className="featured-jobs">
          <h2>Vagas em Destaque</h2>
          <div>
            <CardList />
          </div>
          <div></div>
        </section>
      </main>
    </div>
  );
}

export default Homepage;

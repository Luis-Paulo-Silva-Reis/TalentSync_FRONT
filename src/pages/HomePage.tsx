import FormSearchJob from "../components/FormSearchJob";
import "../styles/HomePage.css";
import React from "react";

function Homepage() {
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
            <FormSearchJob className={"Jobs-form-home"} />
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

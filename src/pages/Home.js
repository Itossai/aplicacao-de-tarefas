import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-hero">
      <div className="home-hero-content">
        <span className="home-hero-tag">Gerenciamento de Tarefas</span>
        <h1>Organize sua rotina com uma To-Do List prática</h1>
        <p>
          Crie, visualize, edite e exclua tarefas com facilidade. Sua lista fica
          salva no navegador e permanece entre sessões.
        </p>
        <Link to="/adicionar" className="button-primary">
          Adicionar nova tarefa
        </Link>
      </div>

      <div className="home-hero-cards">
        <div className="home-card">
          <strong>Simples</strong>
          <span>Interface clara para foco total nas suas tarefas.</span>
        </div>
        <div className="home-card">
          <strong>Global</strong>
          <span>Context API para compartilhar o estado de tarefas.</span>
        </div>
        <div className="home-card">
          <strong>Persistente</strong>
          <span>Dados salvos no localStorage entre sessões.</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
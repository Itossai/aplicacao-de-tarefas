

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

function AddTask() {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    addTask({
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
    });

    setTitle('');
    setDescription('');
    navigate('/');
  };

  return (
    <section id="add-task" className="add-task-section">
      <div className="add-task-card">
        <h2>Adicionar nova tarefa</h2>
        <p>Use o formulário abaixo para adicionar uma tarefa à sua lista.</p>

        <form className="task-form" onSubmit={handleSubmit}>
          <label htmlFor="task-title">Título</label>
          <input
            id="task-title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Digite o título da tarefa"
          />

          <label htmlFor="task-description">Descrição</label>
          <textarea
            id="task-description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Adicionar detalhes da tarefa"
          />

          <button type="submit">Salvar tarefa</button>
        </form>
      </div>
    </section>
  );
}

export default AddTask;

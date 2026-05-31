import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskList() {
  const { tasks, removeTask } = useContext(TaskContext);

  return (
    <section className="task-list-section">
      <h2>Minhas tarefas</h2>
      {tasks.length === 0 ? (
        <p>Não há tarefas salvas ainda. Adicione uma tarefa para começar.</p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <article key={task.id} className="task-item">
              <div>
                <strong>{task.title}</strong>
                {task.description && <p>{task.description}</p>}
              </div>
              <button type="button" onClick={() => removeTask(task.id)}>
                Excluir
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default TaskList;

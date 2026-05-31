import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import TaskList from './pages/TaskList';
import { TaskProvider } from './context/TaskContext';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="App">
          <main className="App-main">
            <div className="App-button-group">
              <Link className="App-button" to="/">
                Home
              </Link>
              <Link className="App-button" to="/adicionar">
                Adicionar tarefa
              </Link>
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/adicionar" element={<AddTask />} />
            </Routes>

            <TaskList />
          </main>
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;
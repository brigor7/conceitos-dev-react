import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    api.get('/').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // setProjects([...projects, `novo projeto ${Date.now()}`]);
    const response = await api.post('/', {
      title: `novo projeto ${Date.now()}`,
      owner: 'Diego Fernandes',
    });
    const project = response.data;
    setProjects([...projects, project]);
  }
  return (
    <>
      <Header title="Projects" />
      <main>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.title}</li>
          ))}
        </ul>

        <button type="button" onClick={handleAddProject}>
          Adicionar Projetos
        </button>
      </main>
    </>
  );
}

import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 20px;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ProjectCard = styled.div`
  background-color: #333;
  border: 1px solid #0f0;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px #0f0;
  }
`;

const Projects = () => (
  <ProjectsContainer id="projects">
    <h2>My Projects</h2>
    <ProjectGrid>
      <ProjectCard>
        <img src="project-thumbnail.jpg" alt="Project Thumbnail" />
        <h3>Project Title</h3>
        <p>Short description of the project.</p>
        <a href="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
      </ProjectCard>
    </ProjectGrid>
  </ProjectsContainer>
);

export default Projects;


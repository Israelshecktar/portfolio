export default function ProjectCard({ project }) {
    return (
      <div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.link}>View Project</a>
      </div>
    );
  }
  
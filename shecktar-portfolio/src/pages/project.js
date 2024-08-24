import ProjectCard from '../components/Footer';
import projects from '../data/projects';

export default function Projects() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

import "../../styles/components/projectcontainer.sass";
import { Projects } from "../../data/ProjectsData";

function ProjectsContainer() {
  return (
    <section className="projects-container">
      <h2 className="project-title">Projetos em destaque</h2>
      <div className="projects-card-container">
        {Projects.map((project) => (
          <div className="projects-card" key={project.id}>
            <div className="project-image">
              <a href={project.demo} target="__blank">
                <img src={`./images/${project.image}`} alt="" />
              </a>
            </div>
            <div className="project-info-container">
              <div className="project-infos">
                <div className="project-name">
                  <h3>{project.name}</h3>
                </div>
                <div className="project-tech">
                  <p>{project.tech}</p>
                </div>
              </div>
              <div className="project-btn-container">
                <a href={project.demo} target="__blank" className="project-btn">
                  Demo
                </a>
                <a
                  href={project.source}
                  target="__blank"
                  className="project-btn"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/LucasA0?tab=repositories"
        target="__blank"
        className="btn"
      >
        Ver Mais
      </a>
    </section>
  );
}

export default ProjectsContainer;

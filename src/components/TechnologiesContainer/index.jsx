import { technologies } from "../../utils/TechData";

import "../../styles/components/technologiescontainer.sass";

function TechnologiesContainer() {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            <div className="tech-icon">
              <img src={`./images/${tech.icon}`} alt="" />
            </div>
            <div className="technology-info">
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-knowledge">{tech.knowledge}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnologiesContainer;

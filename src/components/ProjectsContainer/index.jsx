import "../../styles/components/projectcontainer.sass";

const Projects = [
  {
    id: "dashboard",
    name: "Dashboard",
    image: "../../assets/images/Dashboard.PNG",
    tech: "React.Js, Tailwind, Syncfusion UI, React Icons, React Router",
    source: "https://github.com/LucasA0/professional-dashboard",
    demo: "https://grand-melba-05e51c.netlify.app",
  },
  {
    id: "cryptoapp",
    name: "Crypto News",
    image: "../../assets/images/CryptoNews.PNG",
    tech: "React.Js, Ant Design, Chart.js, Millify, Redux, Moment",
    source: "https://github.com/LucasA0/CryptoNews",
    demo: "https://cryptoappnews.netlify.app",
  },
  {
    id: "pomodoro",
    name: "Pomodoro App",
    image: "../../assets/images/Pomodoro.PNG",
    tech: "React.Ts, TypeScript",
    source: "https://github.com/LucasA0/pomodoro-app",
    demo: "https://pomodoro-app-76ab.netlify.app/",
  },
];

function PojectsContainer() {
  return (
    <section className="projects-container">
      <h2>Projetos em destaque</h2>
      <div className="projects-card-container">
        {Projects.map((project) => (
          <div className="projects-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt="" />
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

export default PojectsContainer;

import "../../styles/components/maincontent.sass";
import {
  ProjectsContainer,
  TechnologiesContainer,
  AboutContainer,
} from "../index";

function MainContent() {
  return (
    <div id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </div>
  );
}

export default MainContent;

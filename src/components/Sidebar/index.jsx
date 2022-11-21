import Avatar from "../../../public/images/1619118863366.jpg";
import "../../styles/components/sidebar.sass";
import { SocialNetworks, InformationContainer } from "../index";

function Sidebar() {
  return (
    <div id="sidebar">
      <h1>Lucas Araujo</h1>
      <img src={Avatar} alt="Lucas Araujo" />
      <p className="title">Desenvolvedor Front End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Baixar Currículo
      </a>
    </div>
  );
}

export default Sidebar;

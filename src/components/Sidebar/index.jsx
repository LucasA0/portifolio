import Avatar from "../../../public/images/1619118863366.jpg";
import "../../styles/components/sidebar.sass";
import { SocialNetworks, InformationContainer } from "../index";

function Sidebar() {
  return (
    <div id="sidebar">
      <h1 className="name">Lucas Araujo</h1>
      <img src={Avatar} alt="Lucas Araujo" className="avatar" />
      <p className="title">Desenvolvedor Front End<span className="animated-underline">_</span></p>
      <SocialNetworks />  
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1SMCm8zi3sePH9xHXAfZTzBtXVACYZcDP/view?usp=share_link" target="__blank" className="btn">
        Baixar Currículo
      </a>
    </div>
  );
}

export default Sidebar;

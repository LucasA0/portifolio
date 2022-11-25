import Avatar from "../../../public/images/1619118863366.jpg";
import "../../styles/components/sidebar.sass";
import { SocialNetworks, InformationContainer } from "../index";

function Sidebar() {
  return (
    <div id="sidebar">
      <h1 className="name">Lucas Araujo</h1>
      <img src={Avatar} alt="Lucas Araujo" className="avatar" />
      <p className="title">Desenvolvedor Front End</p>
      <SocialNetworks />  
      <InformationContainer />
      <a href="https://drive.google.com/drive/folders/1CdsroaJR38yLLZ6RL9P6NWRcWovczU8h?usp=share_link" target="__blank" className="btn">
        Baixar Currículo
      </a>
    </div>
  );
}

export default Sidebar;

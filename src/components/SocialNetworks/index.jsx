import "../../styles/components/socialnetworks.sass";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/lucas-c-araujo/",
  },
  { name: "github", icon: <FaGithub />, link: "https://github.com/LucasA0" },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/lucas_c_araujo12/",
  },
];

function SocialNetworks() {
  return (
    <div id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          target="__blank"
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialNetworks;

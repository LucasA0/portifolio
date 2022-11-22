import "../../styles/components/informationcontainer.sass";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

function InformationContainer() {
  return (
    <div id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p className="info-p">(21) 99358-6894</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p className="email-text">lucascdearaujo444@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p className="info-p">Duque de Caxias / RJ</p>
        </div>
      </div>
    </div>
  );
}

export default InformationContainer;

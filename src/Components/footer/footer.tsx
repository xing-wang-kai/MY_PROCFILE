import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        Isso é Tudo{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - Voltar para o topo? -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/xingwangkai/" className="social">
          <BsInstagram  />
        </a>
        <a href="https://www.linkedin.com/in/deusnir-portela-633b90181/" className="social">
          {" "}
          <AiFillLinkedin  />
        </a>
        <a href="https://web.whatsapp.com/send?phone=5511990150864" className="social">
          {" "}
          <AiOutlineWhatsApp  />
        </a>

        <a href="https://www.youtube.com/channel/UCY29hQpYlZK4ZeHA8p9f_7g"  className="social">
          <TiSocialYoutube />
        </a>

        <a href="https://github.com/xing-wang-kai" className="social">
          <TiSocialGithub  />
        </a>
      </div>
    </div>
  );
}
export default Footer;
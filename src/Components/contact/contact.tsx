import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Fale Comigo</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com/channel/UCY29hQpYlZK4ZeHA8p9f_7g"
          className="contact youtube icon"
          target={"blank"}
        >
          <AiOutlineYoutube  />
          <h2>
            youtube <span>Creative Ambition</span>
          </h2>
        </a>

        <a
          href="https://web.whatsapp.com/send?phone=5511990150864"
          className="contact whatsapp icon"
          target={"blank"}
        >
          <AiOutlineWhatsApp  />
          <h2>
            whatsapp <span>+55 11 99015 0864</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/xingwangkai/" className="contact instagram icon" >
          <AiOutlineInstagram />
          <h2>
            instagram <span>_xing_wang_kai_</span>
          </h2>
        </a>

        <a href="https://github.com/xing-wang-kai" className="contact instagram icon" target="_blank" >
          <AiFillGithub />
          <h2>
            instagram <span>_xing_wang_kai_</span>
          </h2>
        </a>

        <a href="https://www.linkedin.com/in/deusnir-portela-633b90181/" className="contact instagram icon" target="_blank" >
          <AiFillLinkedin />
          <h2>
            instagram <span>Deusnir Portela</span>
          </h2>
        </a>

        

        
      </div>
    </div>
  );
}

export default Contact;
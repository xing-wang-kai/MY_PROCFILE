import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

const NavBar = () => {
    return(
        <div className="navigation">
        <a href="#home" className="icon active-nav">
          <AiOutlineHome  />
        </a>
        <a href="#about" className="icon">
          <AiOutlineUser  />
        </a>
        <a href="#certificados" className="icon">
          <BsBook  />
        </a>
        <a href="#contact" className="icon">
          <BiMessageRoundedDots  />
        </a>
        <a href="#footer" className="icon">
          <BsArrowDownCircle  />
        </a>
      </div>
    )
}

export default NavBar;
import "./nav.css";
import { VscHome } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { BsBook } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { BsArrowDownCircle } from "react-icons/bs";
import {VscMortarBoard} from 'react-icons/vsc'

const NavBar = () => {
    return(
        <div className="navigation">
          <a href="#home" className="icon active-nav">
            <VscHome  />
          </a>
          <a href="#about" className="icon">
            <VscAccount  />
          </a>
          <a href="#certificados" className="icon">
            <VscMortarBoard  />
          </a>
          <a href="#contact" className="icon">
            <AiOutlineMessage  />
          </a>
          <a href="#footer" className="icon">
            <BsArrowDownCircle  />
          </a>
      </div>
    )
}

export default NavBar;
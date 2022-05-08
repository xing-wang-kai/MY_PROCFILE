import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">
        Saiba mais
      </a>
      <a href="#contact" className="btn sec">
        Contato
      </a>
    </div>
  );
}

export default Buttons;
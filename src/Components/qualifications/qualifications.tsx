import "./qualifications.css";

const Qualifications = () => {
  return (
    <div className="Qualit_container">
      <span className="quali-text">Minhas Habilidades</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html"></div>
          <h1>html</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>css</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>javascript</h1>
        </div>
        <div className="qualification">
          <div className="content c-plus-plus"></div>
          <h1>TypeScript</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>react</h1>
        </div>
        <div className="qualification">
          <div className="content bootstrap"></div>
          <h1>bootstrap</h1>
        </div>
        <div className="qualification">
          <div className="content sass"></div>
          <h1>Sass</h1>
        </div>
        <div className="qualification">
          <div className="content nest"></div>
          <h1>nest</h1>
        </div>
        <div className="qualification">
          <div className="content c-sharp"></div>
          <h1>c#</h1>
        </div>
        <div className="qualification">
          <div className="content kotlin"></div>
          <h1>GraphQL</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
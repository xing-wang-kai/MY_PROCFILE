import "./Portifolio.css";
import pets from "../props/apipetshop.png"
import gatito from '../props/gatitos.png'
import todo from '../props/todo.png'
import linkmarkdown from '../props/linkmarkdown.png';

const Portifolio = () => {
  return (
    <div className="container-portifolio-main">
      <h2 className="container-portifolio-titulo"> Meus Trabalhos </h2>
      <div className = "container-portifolio-cards">

        <div className="container-portifolio--card">
        <div>
        <figure>
              <img src={pets} className="portifolio-img"  alt="api petshop"/>
            </figure>
            <div className="portifolio-text">
           
            <h2 className="title"> API petshop</h2>
            <hr/>

            <p className="text">API usando métodos CRUD com integração a arquivo JSON, biblioteca Express, CORS, path usando metodologias modernas e modelo MVC, integração de pesquisa e separação de assuntos por seções, renderização no view usando framework MUSTACHE</p>
            <div  className="portifolio-button"><a href="https://hidden-coast-70894.herokuapp.com/" target={"blank"}>Acesse! </a></div>
        </div>
        </div>
        </div>

        <div className="container-portifolio--card">
        <div>
        <figure>
              <img src={gatito} className="portifolio-img"  alt="api petshop"/>
            </figure>
        </div>
        <div className="portifolio-text">
           
            <h2 className="title"> Blogue Gatitos</h2>
            <hr/>

            <p className="text">Blogue Gatitos usando métodos modernos de renderização com REACT, react-components, React Router e Styled Components do React</p>
            <div  className="portifolio-button"><a href="https://secret-garden-28387.herokuapp.com/" target={"blank"}>Acesse! </a></div>
        </div>
        </div>

        <div className="container-portifolio--card">
          <div>
              <figure>
                    <img src={todo} className="portifolio-img"  alt="api petshop"/>
                  </figure>
              </div>
            <div className="portifolio-text">
              
                <h2 className="title"> Lista To-do</h2>
                <hr/>

                <p className="text">Abordagem moderna do React js utilizando conceitos modernos de React components e hooks, além de configurações e uso de lógica em Javascript para criação das funcionabilidades, React router dom para criação de rotas estáticas que ajudam na navegação do SPA sem necessidade de várias requisições aumentando a performance da página.</p>
                <div  className="portifolio-button"><a href="https://tranquil-garden-45649.herokuapp.com/" target={"blank"}>Acesse! </a></div>
            </div>
        </div>

        <div className="container-portifolio--card">
          
        <div>
        <figure>
              <img src={linkmarkdown} className="portifolio-img"  alt="api status-link-md"/>
            </figure>
            <div className="portifolio-text">
           
            <h2 className="title"> API status-link-md</h2>
            <hr/>

            <p className="text">API que verifica todos links em um arquivo markdown e retorna se o link está ativo com retorno 200 ou se o mesmo está fora do ar com retorno 404. Está API é util para blogs que usam o MarkDown para suas postagens, desta maneira com os retornos corretos os editores e aqueles que serão os autores do conteúdos conseguem garantir que os links estão funcionais para todos os usuários.</p>
            <div  className="portifolio-button"><a href="https://www.npmjs.com/package/status-link-md" target={"blank"}>NPM </a></div>
            <div  className="portifolio-button"><a href="https://github.com/xing-wang-kai/PROJETO_BACKEND_API_STATUSOFMARKDOWNLINK" target={"blank"}>GitHub </a></div>
        </div>
        </div>
          
        </div>
        <div className="container-portifolio--card">

        </div>

      </div>
    </div>
  );
};

export default Portifolio;
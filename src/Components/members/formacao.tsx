import './Style.css'
import jsAlgI from '../props/js-algoritimosI.svg'
import nest from '../props/nest01.svg'
import react from '../props/react.svg'
import backEnd from '../props/backend.svg'
import graphql from '../props/graphql.svg'

const Formacao = () => {
    return(
    <div id="certificados" className="container-formacao">
        <h2> Cursos {"&"} Certificados</h2>

        <div className="container-cards">
            <div className="container--card">
                <div className="container--card-body">
                <img src={jsAlgI} alt="cursojavascript" className="container-card--img" />
                <div className="container-card--text">
                    <h2 className="title">Algoritmos com JavaScript I</h2>
                    <h3 className="position">Curso I: iniciando com algoritmos de ordenação</h3>
                    <h3 className="position">Curso II: aprofundando em algoritmos de ordenação e busca</h3>
                    <br />
                    <h4 className="abaut">Curso sobre a importância dos algoritmos, usando algoritmos no dia a dia, resolvendo diferentes tipos de problemas com algoritmos, resolvendo problemas de programação, complexidade dos algoritmos.</h4>
                </div>
                <br/ >
                <br/ >
                    <a href="https://cursos.alura.com.br/certificate/c2b53ead-97c0-431a-8e14-5d8e7cfa97ed" className="cotainer-button" target="_blank">
                    <span>Certificado I</span>
                    </a>

                    <a href="https://cursos.alura.com.br/certificate/f5b56082-9a6b-4c4c-8b8d-ebe1bd1a5036" className="cotainer-button" target="_blank">
                    <span>Certificado II</span>
                     </a>
                <br/>
                <br/>
                </div>
                
            </div>

            <div className="container--card">
                <div className="container--card-body">
                <img src={nest} alt="cursojavascript" className="container-card--img" />
                <div className="container-card--text">
                    <h2 className="title">NestJS</h2>
                    <h3 className="position">cursoI:APIs REST com NestJS: buscas, validação, serialização</h3>
                    <h3 className="position">Curso II: criando uma API Rest com TypeScript</h3>
                    <br />
                    <h4 className="abaut">Usando Framework Nest js, criando API REST, Usando métodos CRUD, entendo funcionamento do Nest por baixo dos panos. Injeção de dependências, banco de dados MySQL usando o Sequelize.</h4>
                    
                </div>
                <br/ >
                <br/ >
                    <a href="https://cursos.alura.com.br/certificate/9ac3e003-bd51-4467-bc4a-67016a8981b8" className="cotainer-button" target="_blank">
                    <span>Certificado I</span>
                    </a>

                    <a href="https://cursos.alura.com.br/certificate/2328e3b8-45fd-49d2-8586-33da6edfddf0" className="cotainer-button" target="_blank">
                    <span>Certificado II</span>
                     </a>
                <br/>
                <br/>
                </div>
            </div>


            <div className="container--card">
                <div className="container--card-body">
                <img src={backEnd} alt="cursojavascript" className="container-card--img" />
                <div className="container-card--text">
                    <h2 className="title">Formação JavaScript para back-end</h2>
                    <h3 className="position">Fundamentos do Javascript, Arrays, objetos, criando bibliotecas</h3>

                    <br />
                    <h4 className="abaut">Formação back-end em Javascript com 76h de carga horária, 7 cursos, fundamentos da linguagem Javascript e toda sua complexidade.</h4>
                    
                </div>
                <br/ >
                <br/ >
                    <a href="https://cursos.alura.com.br/degree/certificate/84c5a1b5-d734-408b-993f-eca1c75e59f6" className="cotainer-button" target="_blank">
                    <span>Certificado I</span>
                    </a>
                <br/>
                <br/>
                </div>
            </div>



            <div className="container--card">
                <div className="container--card-body">
                <img src={react} alt="cursojavascript" className="container-card--img" />
                <div className="container-card--text">
                    <h2 className="title">Formação React js</h2>
                    <h3 className="position">Funcionamento do React, React components, styled-components com React, teste TDD com React, React Router DOM, React Function vs React class, React Hooks</h3>

                    <br />
                    <h4 className="abaut">Formação 100horas para Front-end com React Js, desde o uso de formulas mais antigas para manutenção de códigos como metodologias modernas, criando estilos com React Styled componets, e React com TypeScrip usando Templates.</h4>
                    
                </div>
                <br/ >
                <br/ >
                    <a href="https://cursos.alura.com.br/degree/certificate/492b652d-dc01-48c3-b178-14bc3d14b106" className="cotainer-button" target="_blank">
                    <span>Certificado I</span>
                    </a>
                <br/>
                <br/>
                </div>
            </div>


            <div className="container--card">
                <div className="container--card-body">
                <img src={graphql} alt="cursojavascript" className="container-card--img" />
                <div className="container-card--text">
                    <h2 className="title">Formação GraphQL</h2>
                    <h3 className="position">GraphQL: construindo uma API com Apollo Server</h3>

                    <br />
                    <h4 className="abaut">Desenvolvimento de api Rest com GraphQL, linguagem voltada para API utilizada em qualquer banco de dados.</h4>
                    
                </div>
                <br/ >
                <br/ >
                    <a href="https://cursos.alura.com.br/certificate/ca65fd36-ccb6-45b5-af77-659fc6420fc0" className="cotainer-button" target="_blank">
                    <span>Certificado I</span>
                    </a>
                <br/>
                <br/>
                </div>
            </div>

        </div>

    </div>
    )
}

export default Formacao;
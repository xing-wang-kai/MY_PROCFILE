import './home.css';
import img from '../props/uso.png';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';
import { GiGamepad } from 'react-icons/gi'
import { VscBracketDot } from 'react-icons/vsc'
import { VscSymbolColor } from 'react-icons/vsc'

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>Rolar para baixo</h5>
        <div className='scroll'>
            <BsMouse  />
        </div >
        
        <hr />
      </a>

      <h2>
        <span>Sobre Mim</span> <br />
        <p>
        <p><br />
        Olá! Sou estudante do curso de graduação em Jogos Digitais. Sou apaixonado por códigos. Tenho Certificações em:
        </p>

        <div className="paragraph-container">
            <div  className="icon-home" >
              <VscSymbolColor/>
            </div>
            <div className='habilidade-titulos'>
                <p ><br />Front-end: <p className="habilidades" >HTML5, CSS3, Javascript, Sass, bootstrap, Material-Ui, Jquery, React ( react-Functions Components, React-Router, React Styled-Components, React Tdd, React Redux, React Hooks, React com Typescript). </p></p>
            </div> 
        </div>

        <div className="paragraph-container">
            <div  className="icon-home" >
              <VscBracketDot />
            </div>
          <div className='habilidade-titulos'>
              <p><br />Back-end: <p className="habilidades" >TypeScript, NodeJS(Jwt, bCrypt e autentificação, ), Sequelize ORM, Moogoze, SQL(mySQL), noSQL(mongoDB), API REST, Modelos MVC, UML, NEST, GraphQL.</p></p>
          </div>
        </div> 

        <div className="paragraph-container">
            <div  className="icon-home" >
               <GiGamepad />
            </div>
        <div className='habilidade-titulos'>
            <p><br/>Games: <p className="habilidades" >Csharp, C, C++, Unity, blender, VisualStudio, Unity, 2d games, 3d games.</p></p>
            <br/>
        </div>
        </div>
        
        <p><br />Pretendo com minhas habilidades me desenvolver ainda mais e ajudar no processo e no trabalho em equipe, buscando sempre a melhor prática para código e otimização de processos para reduzir tempo de testes e manter a qualidade do serviço.</p>
        <br />
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
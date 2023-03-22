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

        <img src={img} alt='Imagem do Kai Wang' />
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
        Olá! Sou estudante do curso de graduação em Jogos Digitais. Sou apaixonado por códigos. Sou certifica em desenvolvimento Web Fullstack e tenho cetificação pela google para procedimento de implementação de conversões com Google ADS, Remarketing, enhanced convertion, enhanced e-commerce, google Analytics e Google Tag Manager (GTM):
        </p>

        <div className="paragraph-container">
            <div  className="icon-home" >
              <VscSymbolColor/>
            </div>
            <div className='habilidade-titulos'>
                <p ><br />Front-end: <p className="habilidades" >Desenvolvimento Web front end com boas práticas de código, usando habilidade modernas com Javascript e frameworks como bootstrap, Sass, também tenho habilidade com conceitos de SPA (single page aplication) usando framework como REACT e ANGULAR. </p></p>
            </div> 
        </div>

        <div className="paragraph-container">
            <div  className="icon-home" >
              <VscBracketDot />
            </div>
          <div className='habilidade-titulos'>
              <p><br />Back-end: <p className="habilidades" >Tenho conhecimentos de uso de diversos framework para desenvolvimento back end tanto com uso de Java spring para desenvolvimento de API como ultilização de TypeScript para desenvolvimento de sistemas com conexões com bancos de dados como SQL e mapeamento ORM (Object-Relational Mapping) ultilizando boas práticas MVC (model - view - control).</p></p>
          </div>
        </div> 

        <div className="paragraph-container">
            <div  className="icon-home" >
               <GiGamepad />
            </div>
        <div className='habilidade-titulos'>
            <p><br/>Games: <p className="habilidades" >Tenho grandes habilidades de desenvolvimento de games e já desenvolvi Motores para jogos com JAVA, também tenho habilidades em ultilizar ferramentas modernas para desenvolvimento de games 2d e 3d como Unity.</p></p>
            <br/>
        </div>
        </div>
        
        <p><br />Entre em contato comigo e faça agora mesmo seu orçamento ou sua proposta.</p>
        <br />
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
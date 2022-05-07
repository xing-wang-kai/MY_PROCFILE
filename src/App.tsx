import './App.css';
import './style.css'
import About from './Components/about/about';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';
import HeaderComponet from './Components/header/header';
import Home from './Components/home/home';
import NavBar from './Components/navbar/navbar';
import Formacao from './Components/members/formacao';

function App() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <HeaderComponet />
      <NavBar />
      <Home />
      <About />
      <Formacao />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
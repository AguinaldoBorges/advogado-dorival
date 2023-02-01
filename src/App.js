import './App.css';
import Menu from './component/Menu';
import Banner from './component/Banner';
import Services from './component/Services';
import About from './component/About';
import Faq from './component/Faq';
import Paralax from './component/Paralax';
import Depositions from './component/Depositions';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App container-fluid">
      {/* Menu */}
      <header id="menu" className='row'>
        <Menu />
      </header>

      {/* Banner */}
      <section id="banner" className='row'>
        <Banner />
      </section>

      {/* Services */}
      <section id="services" className='row'>
      <Services />
      </section>

      {/* About */}
      <section id="about" className='row'>
        <About />
      </section>

      {/* Faq */}
      <section id="faq" className='row d-flex align-items-center'>
        <Faq />
      </section>

      {/* Paralax */}
      <section id="paralax" className='row'>
        <Paralax />
      </section>

      {/* Depositions */}
      <section id="depositions" className='row'>
        <Depositions />
      </section>

      {/* footer */}
      <footer id="footer" className='row'>
      <Footer />
      </footer>
    </div>
  );
}

export default App;

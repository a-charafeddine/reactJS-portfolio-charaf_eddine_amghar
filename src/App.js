import React from 'react';
import Sidebar from './Components/Sidebar'
import Hello from './Components/Hello';
import About from './Components/About'
import Services from './Components/Services'
import Creation from './Components/Creation';
import Contact from './Components/Contact'
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import './sass/global.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <main className="App">
      <section className="container--main">
        <Sidebar />
        <section className="container-fluid container-page">
          <Hello />
          <About />
          <Services />
          <Creation />
          <Contact />
          <Footer />
          <div className="back--to--top link-hover hide">
            <span><FontAwesomeIcon icon={faArrowUp}/></span>
          </div>
        </section>
      </section>
      <Loader />
    </main>
  );
}

export default App;

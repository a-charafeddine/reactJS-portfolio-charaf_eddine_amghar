import React from 'react';
import myImg from '../img/my_img.png';
import myCV from '../docs/Amghar-Charaf-Eddine-CV.pdf';
import '../sass/components/about.scss'



function About() {
    return(
        <section id="about" className='about padding-100 section-default'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <h2 className="h2-title">A propos<span role="img" aria-label="A propos">💬</span></h2>
                        <h4 className="ocupation d-flex justify-content-start">
                            <span>Je suis</span>
                            <span className="d-block typewrite" data-period="1000" data-type='["Développeur Front-End.", "Intégrateur Web." ]'>
                                <span className="wrap"></span>
                            </span>
                        </h4>
                        <div className="">
                            <p>
                                Passionné par les nouvelles technologies depuis le plus jeune âge, j’utilise mes compétences en programmation et design pour réaliser des sites attrayants, sécurisés et optimisés.
                            </p>
                            <h5>
                                Compétences principales <span role="img" aria-label="Muscle">💪</span>:
                            </h5>
                            <ul className="list">
                                <li>Intégration HTML5/CSS3/SASS d'une maquette graphique responsive selon les différents standards web, les différents supports et l'intéropérabilité entre navigateurs.</li>

                                <li>Mise en place des différentes animations/intéractions utilisateurs grâce au JAVASCRIPT et ses différentes librairies tierces.</li>

                                <li>Intégration responsive d'emailing ou de newsletter, compatible multi-supports (Tablette, Smartphone..)</li>

                                <li>Bundlers & task runners → Webpack, Gulp & Grunt</li>

                                <li>Suite Adobe → Photoshop, Illustrator, After Effects & Premiere Pro</li>
                            </ul>
                        </div>
                        <div className="group-btn text-uppercase">
                            <a href="#contact" className="btn-hover animate-scroll">
                                <div className="bottom"></div>
                                <div className="top">
                                    <div className="label">Contactez Moi</div>
                                </div>
                            </a>
                            <a href={myCV} download="Charaf-Eddine-Amghar-CV" className="btn-hover">
                                <div className="bottom"></div>
                                <div className="top">
                                    <div className="label">Mon CV</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 text-center">
                        <div className="right-corner bold-corner pt-4 pb-4">
                            <img src={myImg} alt="me" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
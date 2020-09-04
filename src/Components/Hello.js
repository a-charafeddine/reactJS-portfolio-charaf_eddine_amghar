import React from 'react';
import homeImg from '../img/home.jpg'
import '../sass/components/hello.scss'
function Hello(){
    return(
        <section id="hello" className="hello section-default">
            <img src={homeImg} alt="home"/>
            <div className="content-hello text-center center-absolute">
                <p className="text-hello text-uppercase">Hello</p>
                <h1 className="h1-title">Je m'appelle<span className="d-block text-uppercase">Charaf Eddine Amghar</span></h1>
                <h4 className="ocupation d-flex justify-content-center">
                    <span>Je suis</span>
                    <span className="d-block typewrite" data-period="1000" data-type='["Développeur Front-end.", "Intégrateur Web." ]'>
                        <span className="wrap"></span>
                    </span>
                </h4>
                <a href="#contact" className="btn-hover btn-white text-uppercase m-auto animate-scroll">
                    <div className="bottom"></div>
                    <div className="top">
                        <div className="label">Contactez Moi</div>
                    </div>
                </a>
            </div>
        </section>
    )
};

export default Hello;
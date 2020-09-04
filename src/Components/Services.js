import React from 'react';
import { faDesktop, faCode, faCrop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../sass/components/services.scss'

function services(){
    return(
        <section id="services" className="services padding-100 section-default bg-color--07">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2-title mb">Serivces</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4   col-12">
                        <div className="service-item">
                            <div className="head-item d-flex  align-items-end">
                                <span className="icon-head d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faCode}/></span>
                                <div className="content-head">
                                    <span>01</span>
                                    <h4>Développement Web</h4>
                                </div>
                            </div>
                            <div className="body-item">
                                <p>
                                    J'utilise les langages <span className="special-word">HTML5</span>, <span className="special-word">CSS3</span> et le préprocesseur <span className="special-word">SASS</span> avec la convention OOCSS (Object-Oriented CSS), <span className="special-word">React</span> et <span className="special-word">Javascript</span>. 
                                    J'effectue quotidiennement une veille technologique afin de me tenir informée des dernières évolutions en matière de développement front-end : <span className="special-word">JavaScript, React, Vue...</span>
                                    <br />
                                    Ainsi je fais en sorte d'apprendre de nouvelles techniques pour optimiser mon travail.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4   col-12">
                        <div className="service-item">
                            <div className="head-item d-flex align-items-end">
                                <span className="icon-head d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faDesktop}/></span>
                                <div className="content-head">
                                    <span>02</span>
                                    <h4>Responsive Design</h4>
                                </div>
                            </div>
                            <div className="body-item">
                                <p>
                                    Parce-que le web d'aujourd'hui est <span className="special-word">“mobile-friendly”</span>, je suis en mesure d'adapter un site web à toutes les résolutions, 
                                    du <span className="special-word">smartphone</span>, à l'écran <span className="special-word">d'ordinateur</span>, en passant par <span className="special-word">la tablette</span>.
                                    <br/>
                                    Le <span className="special-word">Responsive Design</span> permet au site d'être consulté dans un format adapté depuis n'importe quel device.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4   col-12">
                        <div className="service-item">
                            <div className="head-item d-flex align-items-end">
                                <span className="icon-head d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faCrop}/></span>
                                <div className="content-head">
                                    <span>03</span>
                                    <h4>Web Design</h4>
                                </div>
                            </div>
                            <div className="body-item">
                                <p>
                                    A partir d'un brief créatif ou d'un cahier des charges, 
                                    je peux répondre aux besoins des utilisateurs en créant des interfaces <span className="special-word">attractives</span> et <span className="special-word">intuitives</span>.
                                    <br/>
                                    J'aime organiser mon travail en respectant les étapes logiques de la conception web, 
                                    de <span className="special-word">l'arborescence</span> du projet à la <span className="special-word">création graphique</span>, jusqu'à son <span className="special-word">développement</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default services;
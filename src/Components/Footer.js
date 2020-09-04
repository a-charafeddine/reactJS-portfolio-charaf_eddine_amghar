import React from 'react';
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn,faFacebookF, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../sass/components/footer.scss';

function Footer(){
    return(
        <footer className="footer padding-100 bg-color--07">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 col-lg-4">
                        <div className="block--footer block--footer__left">
                            <div className='container-title-logo'>
                                <a href="https://charaf-amghar.com/" className="left-corner title-logo d-block text-center">
                                    <span className="logo">I'm</span>
                                    CHARAF EDDINE AMGHAR
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="block--footer block--footer__middle">
                            <nav className="nav-follow-sidebar">
                                <ul className="d-flex justify-content-between">
                                    <li><a href="https://www.linkedin.com/in/charaf-eddine-amghar/" className="rs-link linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                    <li><a href="https://github.com/a-charafeddine" className="rs-link github"><FontAwesomeIcon icon={faGithub} /></a></li>
                                    <li><a href="mailto:charaf.amghar@gmail.com" className="rs-link gmail"><FontAwesomeIcon icon={faAt} /></a></li>
                                    <li><a href="https://www.facebook.com/sutvikler" className="rs-link facebook"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href="https://www.instagram.com/charafsr4/" className="rs-link instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="block--footer block--footer__right">
                            <div className="copyright">
                                <p>© 2020 All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
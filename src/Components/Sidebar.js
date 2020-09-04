import React from 'react';
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn,faFacebookF, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../sass/components/sidebar.scss'


function Sidebar() {
    return(
        <aside className='sidebar d-flex flex-column justify-content-between'>
            <div className='container-title-logo'>
                <span className="left-corner title-logo d-block text-center">
                    <span className="logo">I'm</span>
                    CHARAF EDDINE AMGHAR
                </span>
            </div>
            <nav className="nav-menu-sidebar text-uppercase">
                <ul>
                    <li><a href="#hello" className="link-hover animate-scroll"><span>Hello</span></a></li>
                    <li><a href="#about" className="link-hover animate-scroll"><span>A propos</span></a></li>
                    <li><a href="#services" className="link-hover animate-scroll"><span>Services</span></a></li>
                    <li><a href="#creation" className="link-hover animate-scroll"><span>Création</span></a></li>
                    <li><a href="#contact" className="link-hover animate-scroll"><span>Contact</span></a></li>
                </ul>
            </nav>
            <nav className="nav-follow-sidebar">
                <ul className="d-flex justify-content-between">
                    <li><a href="https://www.linkedin.com/in/charaf-eddine-amghar/" target="_blank" className="rs-link linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                    <li><a href="https://github.com/a-charafeddine" target="_blank" className="rs-link github"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="mailto:charaf.amghar@gmail.com" target="_blank" className="rs-link gmail"><FontAwesomeIcon icon={faAt} /></a></li>
                    <li><a href="https://www.facebook.com/sutvikler" target="_blank" className="rs-link facebook"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href="https://www.instagram.com/charafsr4/" target="_blank" className="rs-link instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
            </nav>
            <span className="key-sidebar d-flex justify-content-center align-items-center fas fa-ad">
                <span className="hamburger">
                    <span className="hamburger__inner"></span>
                    <span className="hamburger__hidden"></span>
                </span>
            </span>
        </aside>
    );
}

export default Sidebar;
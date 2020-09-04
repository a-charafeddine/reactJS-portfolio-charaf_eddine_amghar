import React from 'react';
import {  faEnvelopeOpenText, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactUsImg from '../img/contact/contactUs.jpg';
import contactUsPhoneImg from '../img/contact/contactUsPhone.jpg';
import '../sass/components/contact.scss';

function Contact(){
    return(
        <section id="contact" className="contact padding-100 section-default bg-color--07">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2-title">Contact</h2>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-6">
                        <figure className="figure-contact figure-contact--left">
                            <img src={contactUsImg} alt="Contact Us" />
                            <figcaption>
                                <h3 className="border--color"><span>Par </span>mail :</h3>
                                <span className="icon"><FontAwesomeIcon icon={faEnvelopeOpenText}/></span>
                                <p>Charaf.amghar@gmail.com</p>
                                <a href="mailto:charaf.amghar@gmail.com"></a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <figure className="figure-contact figure-contact--right">
                            <img src={contactUsPhoneImg} alt="Contact Us" />
                            <figcaption>
                                <h3 className="border--color"><span>Par </span>tél :</h3>
                                <span className="icon"><FontAwesomeIcon icon={faMobileAlt}/></span>
                                <p>+212 654 131 163</p>
                                <a href="tel:+212654131163"></a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
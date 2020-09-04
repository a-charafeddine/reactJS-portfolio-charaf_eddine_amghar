import React from 'react';
import longchampImg from '../img/creation/longchamp.png'
import rimowaImg from '../img/creation/rimowa.png'
import barreauDeNice from '../img/creation/barreaudenice.jpg'
import recoveo from '../img/creation/recoveo.png'
import villeVolvic from '../img/creation/villevolvic.jpg'
import eyesOnTalent from '../img/creation/eyesontalent.jpg'
import eurotechni from '../img/creation/eurotechni.jpg'
import apsis from '../img/creation/apsis.png'
import motoattitude from '../img/creation/motoattitude.png'
import prosiref from '../img/creation/prosiref.png'
import lovea from '../img/creation/lovea.png'
import gextile from '../img/creation/gextile.png'
import aref from '../img/creation/aref.png'
import terrasse from '../img/creation/terrasse.jpg'
import sagamelle from '../img/creation/sagamelle.png'
import '../sass/components/creation.scss'

function Creation() {
    return ( 
        <section id="creation" className = "creation section-default padding-100" >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2-title mb">Créations</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="nav nav-tabs nav-creation" id="myTab" role="tablist">
                            <li className="nav-item full-width">
                                <a className="active tabs-hover" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">All Creations</a>
                            </li>
                            <li className="nav-item ">
                                <a className="tabs-hover" id="salesforce-tab" data-toggle="tab" href="#salesforce" role="tab" aria-controls="salesforce" aria-selected="false">Salesforce SFRA</a>
                            </li>
                            <li className="nav-item">
                                <a className="tabs-hover" id="drupal-tab" data-toggle="tab" href="#drupal" role="tab" aria-controls="drupal" aria-selected="false">Drupal</a>
                            </li>
                            <li className="nav-item">
                                <a className="tabs-hover" id="magento-tab" data-toggle="tab" href="#magento" role="tab" aria-controls="magento" aria-selected="false">Magento</a>
                            </li>
                            <li className="nav-item">
                                <a className="tabs-hover" id="wordpress-tab" data-toggle="tab" href="#wordpress" role="tab" aria-controls="wordpress" aria-selected="false">wordpress</a>
                            </li>
                            <li className="nav-item">
                                <a className="tabs-hover" id="prestashop-tab" data-toggle="tab" href="#prestashop" role="tab" aria-controls="prestashop" aria-selected="false">Prestashop</a>
                            </li>
                            <li className="nav-item">
                                <a className="tabs-hover" id="ruby-tab" data-toggle="tab" href="#rubyOnRails" role="tab" aria-controls="rubyOnRails" aria-selected="false">Ruby On Rails</a>
                            </li>
                        </ul>
                        <div className="tab-content mt-5" id="myTabContent">
                            <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                                <div className="creation-items">
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={longchampImg} alt="Longchamp"/>
                                            <figcaption>
                                                <h4 className="creation-title">Longchamp</h4>
                                                <p className="creation-description">Une entreprise française de maroquinerie de luxe.</p>
                                                <a href="https://www.longchamp.com/fr/fr" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={rimowaImg} alt="Rimowa"/>
                                            <figcaption>
                                                <h4 className="creation-title">Rimowa</h4>
                                                <p className="creation-description">Une entreprise allemande de bagages de haute qualité.</p>
                                                <a href="https://www.rimowa.com/ww/en/home" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={barreauDeNice} alt="Barreaudenice"/>
                                            <figcaption>
                                                <h4 className="creation-title">Barreaudenice</h4>
                                                <p className="creation-description">Ordre des avocats au barreau de nice.</p>
                                                <a href="https://www.barreaudenice.com/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={recoveo} alt="Recoveo"/>
                                            <figcaption>
                                                <h4 className="creation-title">Recoveo</h4>
                                                <p className="creation-description">Laboratoire français de récuperation des donneés.</p>
                                                <a href="https://www.recoveo.com/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={villeVolvic} alt="Ville Volvic"/>
                                            <figcaption>
                                                <h4 className="creation-title">Ville Volvic</h4>
                                                <p className="creation-description">Laboratoire français de récuperation des donneés.</p>
                                                <a href="https://www.ville-volvic.fr/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={eyesOnTalent} alt="Eyes On Talents"/>
                                            <figcaption>
                                                <h4 className="creation-title">Eyes On Talents</h4>
                                                <p className="creation-description">Communauté professionnelle de leaders et de marques innovantes.</p>
                                                <a href="https://eyesontalents.com/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={eurotechni} alt="Eurotechni"/>
                                            <figcaption>
                                                <h4 className="creation-title">Eurotechni</h4>
                                                <p className="creation-description">Spécialisée dans les produits industriels (métaux, compresseurs, ect...).</p>
                                                <a href="https://www.eurotechni.com/fr/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={apsis} alt="Apsis"/>
                                            <figcaption>
                                                <h4 className="creation-title">Apsis</h4>
                                                <p className="creation-description">Experts du marériel de nettoyage industriel</p>
                                                <a href="https://www.apsis.fr/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={motoattitude} alt="Motoattitude"/>
                                            <figcaption>
                                                <h4 className="creation-title">Motoattitude</h4>
                                                <p className="creation-description">spécialiste de l'accessoire moto et scooter</p>
                                                <a href="https://moto-attitude.com/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={prosiref} alt="prosiref"/>
                                            <figcaption>
                                                <h4 className="creation-title">Prosiref</h4>
                                                <p className="creation-description">Spécialisée dans la vente et l'usinage de matériaux hautes températures.</p>
                                                <a href="https://www.prosiref.com/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={lovea} alt="Lovea"/>
                                            <figcaption>
                                                <h4 className="creation-title">Lovea</h4>
                                                <p className="creation-description">Spécialisée dans la vente produits cosmétique.</p>
                                                <a href="https://www.lovea.fr/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover padding-50">
                                            <img className="creation-img" src={gextile} alt="Gextile"/>
                                            <figcaption>
                                                <h4 className="creation-title">Gextile</h4>
                                                <p className="creation-description">Expert mondial du sol vinyleet PVC.</p>
                                                <a href="https://www.gextile.com/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={aref} alt="Aref"/>
                                            <figcaption>
                                                <h4 className="creation-title">Aref</h4>
                                                <p className="creation-description">Vente des machines neuves et occasions</p>
                                                <a href="https://www.aref.fr/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={terrasse} alt="Terrasse 2 mobilhome"/>
                                            <figcaption>
                                                <h4 className="creation-title">Terrasse 2 mobilhome</h4>
                                                <p className="creation-description">Spécialiste de bâches sur mesure.</p>
                                                <a href="https://www.terrasse2mobilhome.com/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="salesforce" role="tabpanel" aria-labelledby="salesforce-tab">
                                <div className="creation-items" data-masonry='{ "columnWidth": 370, "itemSelector": ".creation-item" }'>
                                    <div className="creation-item" >
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={longchampImg} alt="Longchamp"/>
                                            <figcaption>
                                                <h4 className="creation-title">Longchamp</h4>
                                                <p className="creation-description">Une entreprise française de maroquinerie de luxe</p>
                                                <a href="https://www.longchamp.com/fr/fr" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={rimowaImg} alt="Rimowa"/>
                                            <figcaption>
                                                <h4 className="creation-title">Rimowa</h4>
                                                <p className="creation-description">Une entreprise allemande de bagages de haute qualité</p>
                                                <a href="https://www.rimowa.com/ww/en/home" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="drupal" role="tabpanel" aria-labelledby="drupal-tab">
                                <div className="creation-items" data-masonry='{ "columnWidth": 370, "itemSelector": ".creation-item" }'>
                                    <div className="creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={recoveo} alt="Recoveo"/>
                                            <figcaption>
                                                <h4 className="creation-title">Recoveo</h4>
                                                <p className="creation-description">Laboratoire français de récuperation des donneés</p>
                                                <a href="https://www.recoveo.com/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={villeVolvic} alt="Ville Volvic"/>
                                            <figcaption>
                                                <h4 className="creation-title">Ville Volvic</h4>
                                                <p className="creation-description">Laboratoire français de récuperation des donneés</p>
                                                <a href="https://www.ville-volvic.fr/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={aref} alt="Aref"/>
                                            <figcaption>
                                                <h4 className="creation-title">Aref</h4>
                                                <p className="creation-description">Vente des machines neuves et occasions</p>
                                                <a href="https://www.aref.fr/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="magento" role="tabpanel" aria-labelledby="magento-tab">
                                <div className="creation-items" data-masonry='{ "columnWidth": 370, "itemSelector": ".creation-item" }'>
                                    <div className="creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={eurotechni} alt="Eurotechni"/>
                                            <figcaption>
                                                <h4 className="creation-title">Eurotechni</h4>
                                                <p className="creation-description">Spécialisée dans les produits industriels (métaux, compresseurs, ect...).</p>
                                                <a href="https://www.eurotechni.com/fr/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={prosiref} alt="prosiref"/>
                                            <figcaption>
                                                <h4 className="creation-title">Prosiref</h4>
                                                <p className="creation-description">Spécialisée dans la vente et l'usinage de matériaux hautes températures.</p>
                                                <a href="https://www.prosiref.com/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={lovea} alt="Lovea"/>
                                            <figcaption>
                                                <h4 className="creation-title">Lovea</h4>
                                                <p className="creation-description">Spécialisée dans la vente produits cosmétique.</p>
                                                <a href="https://www.lovea.fr/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover padding-50">
                                            <img className="creation-img" src={gextile} alt="Gextile"/>
                                            <figcaption>
                                                <h4 className="creation-title">Gextile</h4>
                                                <p className="creation-description">Expert mondial du sol vinyleet PVC.</p>
                                                <a href="https://www.gextile.com/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="wordpress" role="tabpanel" aria-labelledby="wordpress-tab">
                                <div className="creation-items" data-masonry='{ "columnWidth": 370, "itemSelector": ".creation-item" }'>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={barreauDeNice} alt="Barreaudenice"/>
                                            <figcaption>
                                                <h4 className="creation-title">Barreaudenice</h4>
                                                <p className="creation-description">Ordre des avocats au barreau de nice</p>
                                                <a href="https://www.barreaudenice.com/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="prestashop" role="tabpanel" aria-labelledby="prestashop-tab">
                                <div className="creation-items" data-masonry='{ "columnWidth": 370, "itemSelector": ".creation-item" }'>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={apsis} alt="Apsis"/>
                                            <figcaption>
                                                <h4 className="creation-title">Apsis</h4>
                                                <p className="creation-description">Experts du marériel de nettoyage industriel</p>
                                                <a href="https://www.apsis.fr/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="   creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={motoattitude} alt="Motoattitude"/>
                                            <figcaption>
                                                <h4 className="creation-title">Motoattitude</h4>
                                                <p className="creation-description">spécialiste de l'accessoire moto et scooter</p>
                                                <a href="https://moto-attitude.com/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={terrasse} alt="Terrasse 2 mobilhome"/>
                                            <figcaption>
                                                <h4 className="creation-title">Terrasse 2 mobilhome</h4>
                                                <p className="creation-description">Spécialiste de bâches sur mesure.</p>
                                                <a href="https://www.terrasse2mobilhome.com/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={sagamelle} alt="Sagamelle"/>
                                            <figcaption>
                                                <h4 className="creation-title">Sagamelle</h4>
                                                <p className="creation-description">Spécialiste de bâches sur mesure.</p>
                                                <a href="https://www.terrasse2mobilhome.com/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="rubyOnRails" role="tabpanel" aria-labelledby="ruby-tab">
                                <div className="creation-items" data-masonry='{ "columnWidth": 370, "itemSelector": ".creation-item" }'>
                                    <div className="creation-item">
                                        <figure className="figure-hover">
                                            <img className="creation-img" src={eyesOnTalent} alt="Eyes On Talents"/>
                                            <figcaption>
                                                <h4 className="creation-title">Eyes On Talents</h4>
                                                <p className="creation-description">Communauté professionnelle de leaders et de marques innovantes.</p>
                                                <a href="https://eyesontalents.com/" className="creation-link" target="_blank" rel="noopener noreferrer"></a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Creation;
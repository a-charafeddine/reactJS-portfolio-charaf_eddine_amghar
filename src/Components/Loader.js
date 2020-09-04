import React from 'react';
import '../sass/components/loader.scss';

function Loader(){
    return(
        <section className="container-loader">
            <div className="Box">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    )
}

export default Loader;
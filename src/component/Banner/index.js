import React from 'react';
import ContactForm from './ContactForm';
import './style.css';

function Banner() {
    return (
        <>
            <div class="container-fluid p-5">
                <div class="row d-flex align-items-center">
                    <div class="col-md-6">
                        <h1 id='banner-title'>Advogado Dorival Calazans</h1>
                        <p id='banner-text'>Este site conta com informações sobre o Advogado Dorival Calazans, seu trabalho e, mais importante, como ele pode ajudar você a obter o melhor resultado possível em sua causa.</p>
                    </div>
                    <div class="col-md-6">
                    <ContactForm/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;
import React from 'react';
import './style.css';

function Banner() {
    return (
        <>
            <div class="container-fluid">
                <div class="row d-flex align-items-center">
                    <div class="col-12 p-4" id='contact-form'>
                    <h2>Formulário de Contato</h2>
                        <form>
                            <div class="form-group">
                                <label for="name">Nome</label>
                                <input type="text" class="form-control" id="name" placeholder="Digite seu nome"/>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Digite seu email"/>
                            </div>
                            <div class="form-group">
                                <label for="message">Mensagem</label>
                                <textarea class="form-control" id="message" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;
import React from 'react';
import './style.css';

function Menu() {
    const menu = [
        {
            label: 'Home',
            link: '#banner'
        },
        {
            label: 'Sobre',
            link: '#about'
        },
        {
            label: 'FAQ',
            link: '#faq'
        },
        {
            label: 'Carreira',
            link: '#paralax'
        },
        {
            label: 'Depoimentos',
            link: '#depositions'
        },
    ]
    return (
        <>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <div />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div />
                    <div class="collapse navbar-collapse"/>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {menu.map((item, index) => {
                                return (
                                    <li class="nav-item" key={index}>
                                        <a class="nav-link active" aria-current="page" href={item.link}>{item.label}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu;
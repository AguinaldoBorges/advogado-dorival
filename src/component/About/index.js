import './style.css';
import Title from '../Title';
import Subtitle from '../Subtitle';
import foto from   '../../img/advogado-center.jpg'


function About() {
    return (
        <>
            <div class="container p-5">
                <div class="row">
                    <div class="col-12 pt-5 pb-2">
                    <Title text="Sobre o Advogado Dorival Calazans" />
                    </div>
                    <div class="col-md-6 d-flex justify-content-center mt-3">
                        <img src={foto} alt="Foto do advogado" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 bg-warning d-flex align-items-center justify-content-center p-5  mt-3">
                    <p>O Advogado Dorival Calazans é um profissional especializado em Direito Civil, Direito Penal, Direito Tributário e Direito Trabalhista, com mais de 10 anos de experiência.Ele trabalha para ajudar os seus clientes a obter o melhor resultado possível em suas causas, oferecendo assessoria jurídica de qualidade e aconselhamento profissional.</p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-12">
                    <Subtitle text="Experiência"/>
                        <p>Durante sua trajetória profissional, o Advogado Dorival Calazans acumulou experiência em diversas áreas do Direito. Ele já atuou como advogado de grandes empresas, assessor jurídico de prefeituras e também atendeu a muitos clientes particulares.

                            Além disso, o Advogado Dorival Calazans também já ministrou palestras e cursos sobre Direito e tem vários artigos publicados em revistas especializadas.

                            Veja abaixo alguns dos trabalhos realizados pelo Advogado Dorival Calazans:</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <ul>
                            <li>Assessoria jurídica para empresas de grande porte</li>
                            <li>Atendimento a clientes particulares</li>
                            <li>Consultoria tributária</li>
                            <li>Ministrou cursos e palestras</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>Publicou artigos em revistas jurídicas</li>
                            <li>Atendeu a prefeituras</li>
                            <li>Assessoria jurídica para pequenas empresas</li>
                            <li>Consultoria jurídica para pessoas físicas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
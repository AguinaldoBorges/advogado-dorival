import Title from '../Title';
import './style.css';

function Faq() {
    return (
        <>
            <div class="container p-5">
                <div class="row">
                    <div class="col-md-12 pt-5 pb-5">
                        <h1 id="faq-title">Perguntas Frequentes</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card mb-3">
                            <div class="card-header">
                                <h4>Qual é o custo de um serviço jurídico?</h4>
                            </div>
                            <div class="card-body">
                                O custo de um serviço jurídico depende da situação específica. O Advogado Dorival Calazans pode oferecer descontos nos serviços para ajudar a reduzir os custos.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card mb-3">
                            <div class="card-header">
                                <h4>Quanto tempo leva para concluir um caso?</h4>
                            </div>
                            <div class="card-body">
                                O tempo necessário para concluir um caso depende da complexidade da questão e do nível de envolvimento do Advogado Dorival Calazans.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card mb-3">
                            <div class="card-header">
                                <h4>Como posso entrar em contato com o Advogado Dorival Calazans?</h4>
                            </div>
                            <div class="card-body">
                                Você pode entrar em contato com o Advogado Dorival Calazans por telefone ou e-mail. Também é possível preencher o formulário de contato disponível no site.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card mb-3">
                            <div class="card-header">
                                <h4>Posso obter um orçamento dos serviços do Advogado Dorival Calazans?</h4>
                            </div>
                            <div class="card-body">
                                Sim, você pode solicitar um orçamento dos serviços do Advogado Dorival Calazans preenchendo o formulário de contato disponível no site.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq;
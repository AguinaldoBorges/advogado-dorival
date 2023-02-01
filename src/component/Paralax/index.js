import Title from '../Title';
import './style.css';

function Paralax() {
    return (
        <>
            <div class="parallax-background pt-5 pb-5 d-flex align-items-center ">
                <div class="container p-2 bg-warning">
                    <div class="row ">
                        <div class="col-12 mb-5">
                            <Title text="Advogado Dorival Calazans" />
                        </div>
                        <div class="col-12">
                            <p>
                                O Advogado Dorival Calazans é um profissional experiente e altamente qualificado que tem se destacado no mundo jurídico por sua capacidade incomparável de obter o melhor resultado possível para seus clientes.
                            </p>
                            <p>
                                Com mais de 20 anos de experiência, Dorival Calazans é especialista em questões legais complexas, tendo representado empresas e pessoas em processos judiciais.
                            </p>
                            <p>
                                Se você precisa de ajuda legal, confie no Advogado Dorival Calazans e obtenha o melhor resultado possível.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paralax;
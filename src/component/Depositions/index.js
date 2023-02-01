import Deposition from './Deposition';
import Title from '../Title';
import './style.css';

function Depositions() {
    const depositions = [
        {
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQBWLTRKxm1bDHE4ArgJ91D3YexdigDRf5w&usqp=CAU",
            client: "Nome do cliente",
            text: "O Advogado Dorival Calazans foi incrível para me ajudar com meu caso. Ele foi muito detalhista e se certificou de que todos meus direitos estavam protegidos. Eu recomendo!"
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQBWLTRKxm1bDHE4ArgJ91D3YexdigDRf5w&usqp=CAU",
            client: "Nome do cliente",
            text: "O Advogado Dorival Calazans foi incrível para me ajudar com meu caso. Ele foi muito detalhista e se certificou de que todos meus direitos estavam protegidos. Eu recomendo!"
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQBWLTRKxm1bDHE4ArgJ91D3YexdigDRf5w&usqp=CAU",
            client: "Nome do cliente",
            text: "O Advogado Dorival Calazans foi incrível para me ajudar com meu caso. Ele foi muito detalhista e se certificou de que todos meus direitos estavam protegidos. Eu recomendo!"
        }
    ]
    return (
        <>
            <div class="container p-5">
                <div class="row mb-5 mt-5">
                    <div class="col-md-12">
                        <Title text="Depoimentos" />
                    </div>
                </div>
                <div class="row">
                    {depositions.map((item, index) => {
                        return (
                            <div class="col-lg-4 mb-3" key={index}>
                                <Deposition img={item.image} clientName={item.client} deposition={item.text} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Depositions;
import Card from './Card';
import './style.css';

function Services() {
    const cardContent = [
        {
            id: 1,
            icon: 'settings_accessibility',
            iconColor:'',
            title: 'Direito Civil',
            text: 'O Advogado Dorival Calazans oferece serviços de direito civil, incluindo problemas de herança, direitos de família e muito mais.'
        },
        {
            id: 2,
            icon: 'finance_chip',
            iconColor:'',
            title: 'Direito Tributário',
            text: 'O Advogado Dorival Calazans oferece serviços de direito tributário, incluindo problemas de impostos, obrigações fiscais, etc.'
        },
        {
            id: 3,
            icon: 'frame_person',
            iconColor:'',
            title: 'Direito Penal',
            text: 'O Advogado Dorival Calazans oferece serviços de direito penal, incluindo acusações criminais, defesas legais e muito mais.'
        },
    ]
    return (
        <>
            <section class="services">
                <div class="container p-3">
                    <div class="row">
                        {cardContent.map((item, index) => {
                            return (
                                <div class="col-lg-4" key={index} id="card-container">
                                <Card icon={item.icon} title={item.title} text={item.text}/>
                            </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;
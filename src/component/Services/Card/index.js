import './style.css';

function Card(props) {
    return (
        <>
            <div class="card " id="card-container">
                <div class="card-body text-center row d-flex align-items-center">
                <span class="col-12 material-symbols-outlined" id='card-icon'>
                        {props.icon}
                    </span>
                    <h3 id='card-title'>{props.title}</h3>
                    <p id='card-text'>{props.text}</p>
                </div>
            </div>
        </>
    )
}

export default Card;
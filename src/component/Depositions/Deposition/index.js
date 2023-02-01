
function Deposition(props) {
    return (
        <>
            <div class="container text-center">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <img src={props.img} class="img-fluid" alt="Foto de um cliente feliz" />
                                <p class="card-text">{props.deposition}</p>
                                <h5>{props.clientName}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deposition;
import './style.css';

function Title(props) {
    return (
        <>
            <h1 id='title'>
                {props.text}
            </h1>
        </>
    )
}

export default Title;
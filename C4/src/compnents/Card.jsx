function Card(props) {


    return (
        <div className="contenedor">

            {props.title ? <div className="card">
                {props.title}
            </div> : undefined}

            <div className="card">
                {props.children}
            </div>

            {props.footer ? <div className="card">
                {props.footer}
            </div> : undefined}

        </div>
    )
}

export default Card
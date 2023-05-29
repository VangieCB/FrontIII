import products from './products.json'

/*Muestra la lista de productos con su nombre, precio y descripcion*/
export function ProductCard() {

    return (
        <>
            <div>
                <h1>Productos Disponibles</h1>

                {products.map(product => (
                    <div className='card' key={product.id}>
                        <h2>{product.nombre}</h2>
                        <p>{product.descripcion}</p>
                        <p>{product.precio}</p>

                    </div>
                ))}

            </div>

        </>
    )
}
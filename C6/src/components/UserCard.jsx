import users from './users.json'

/*Muestra la lista de usuarios con su apodo, y la lista de sus mascotas 
con el formato ${nombre} (${edad}): ${color}*/

export function UserCard() {

    return (
        <>
            <section>
                <h1>🐾Mascotas de Usuarios🐾</h1>
                {users.map(user => (
                    <div className='card' key={user.email}>
                        <h2>Apodo del Usuario: {user.apodo}</h2>
                            <ul>
                                {user.mascotas.map(mascota => (
                                    <li key={mascota.nombre}>
                                        Nombre: {mascota.nombre} - Edad: {mascota.edad} - Color {mascota.color}
                                    </li>
                                ))}
                            </ul>
                    </div>
                ))}
            </section>

        </>


    )
}
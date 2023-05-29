import posteos from './data.json'
import Posteo from './posteo'

export default function Estatus(props) {


    return (
        <>

            <h1> Posteos </h1>

            {posteos.map(posteo => (
                <Posteo key={posteo.id} titulo={posteo.titulo} texto={posteo.texto}></Posteo>

            ))}


        </>

    )

}
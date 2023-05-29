
import './App.css'
import NombreComponente from './components/NombreComponente';
import ComponenteLista from './components/ComponenteLista';

function App() {

  const like = () => { console.log("Like"); }
  return (
    <>
      <h1>Pelicula</h1>
      <p>Descripcion Peli</p>
      <button onClick={like}>Like</button>
      <NombreComponente title="Géneros" />
      <ComponenteLista>
        <li>Acción</li>
        <li>Romance</li>
        <li>Drama</li>
      </ComponenteLista>
      <NombreComponente title="Actores"> </NombreComponente>

      <ComponenteLista>
        <li>Leonardo DiCaprio</li>
        <li>Brad Pitt</li>
        <li>Tom Cruise</li>
        <li>Will Smith</li>
        <li>Julia Roberts</li>
        <li>Angelina Jolie</li>
        <li>Meryl Streep</li>
        <li>Scarlett Johansson</li>
      </ComponenteLista>

    </>
  )
}

export default App

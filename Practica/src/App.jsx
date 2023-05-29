import { useState } from 'react'
import './App.css'
import Estatus from './components/Estatus'
import Posteos from './components/Posteos'

function App() {
  const [numeroTotalLikes, setnumeroTotalLikes] = useState(0)
  const sumarLikes=() =>setnumeroTotalLikes(numeroTotalLikes+ 1)


  return (
    <>
     <Estatus cantidadLikes={numeroTotalLikes}> </Estatus>

     <Posteos sumarLikes={sumarLikes}> </Posteos>
     
    </>
  )
}

export default App

import { useState } from 'react'
import Card from './compnents/Card'
import './App.css'

function App() {

  return (
    <>

      <Card title="Titulo">
        card children
      </Card>

      <Card title>
        card children 2
      </Card>

      <Card title="Titulo" footer="Footer">
        card children
      </Card>


    </>
  )
}

export default App

import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Inicio from './components/Inicio'
import Juego from './components/Juego'

function App() {

  const [ pokemon, setPokemon ] = useState([])
  const [ inicio, setInicio ] = useState(false)
  const [ respuesta, setRespuesta ] = useState('')
  const [ acertado, setAcertado ] = useState(false)
  const [ cargando, setCargando ] = useState(false)

  useEffect(() => {

      const obtenerPokemon = async () => {
          var r = Math.random();
          const numero = Math.floor(r * (1 - 898) + 898);

          const url = `https://pokeapi.co/api/v2/pokemon/${numero}`
          
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()

          setPokemon(resultado)
          setCargando(true)
      } 

      obtenerPokemon()
  }, [inicio, respuesta])

  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio setInicio={setInicio} setCargando={setCargando}/>} />
          <Route path="/play" element={<Juego 
          pokemon={pokemon} 
          setRespuesta={setRespuesta}
          acertado={acertado}
          setAcertado={setAcertado}
          cargando={cargando}
          setCargando={setCargando}
          />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;

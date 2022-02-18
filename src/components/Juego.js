import React, { useState, useEffect } from 'react'
import styles from '../styles/Juego.module.css'
import Formulario from './Formulario'
import Spinner from './Spinner'

const Juego = ({ pokemon, setRespuesta, acertado, setAcertado, cargando, setCargando }) => {

    const [ nombre, setNombre ] = useState('')
    const [ imagen, setImagen ] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setImagen(pokemon.sprites.other.home.front_default)
            setNombre(pokemon.species.name)
            setCargando(false)
        }, 2000);
    }, [pokemon])

  return (
    <main className={`contenedor ${styles.juego}`}>
        {cargando ? (<Spinner />) : 
        (
            <>
                <img src={imagen} className={acertado ? styles.juego__pokemon : styles.juego__nopokemon}/>

                <Formulario 
                    nombre={nombre}
                    setRespuesta={setRespuesta}
                    setAcertado={setAcertado}
                    setCargando={setCargando}
                />
            </>
        )
        }
        
    </main>
  )
}

export default Juego
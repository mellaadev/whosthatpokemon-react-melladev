import React, { useState, useEffect } from 'react'
import styles from '../styles/Form.module.css'

const Formulario = ({ nombre, setRespuesta, setAcertado, setCargando }) => {

    const [ error, setError ] = useState('') 
    const [ pokemonRespuesta, setPokemonRespuesta] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        // Verificar que se ha escrito algo
        if( pokemonRespuesta.trim() === '' ) {
            setError('You must enter the name of the Pokemon')
            return
        }
        setError('')

        // Mirar si el introducido y el nombre son iguales
        if( pokemonRespuesta !== nombre ) {
            setError("It's not that Pokemon!")
            return
        }
        setError('')
        setAcertado(true)
        // meterlo en Respuesta
        setTimeout(() => {
            setRespuesta(pokemonRespuesta)
            setPokemonRespuesta('')
            setAcertado(false)
            setCargando(true)
        }, 3000);

    }

    useEffect(() => {
      setTimeout(() => {
          setError('')
      }, 5000);
    }, [error])
    

  return (
    <form 
        onSubmit={handleSubmit}
        className={styles.form}
    >
        <div className={styles.form__campo}>
            <input 
                type='text'
                placeholder="Pokemon's name"
                id='name'
                name='name'
                value={pokemonRespuesta}
                onChange={e => setPokemonRespuesta(e.target.value.toLocaleLowerCase())}
                className={styles.form__input}
            />
        </div>

        <input
            type='submit'
            value='Send'
            className='btn btn-enviar'
        />

        {error ? <p className={styles.form__error}>{error}</p> : null}
    </form>
  )
}

export default Formulario
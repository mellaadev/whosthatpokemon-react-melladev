import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Inicio.module.css'

const Inicio = ({ setInicio , setCargando }) => {
    
    let history = useNavigate()

    const handlePlay = () => {
        setInicio(true)
        setCargando(true)
        history('/play')
    }

  return (
    <main className={styles.inicio}>
        <div className={`contenedor ${styles.inicio__contenido}`}>
            <img src='/img/whopoke.jpg' alt="Who's that pokemon" className={styles.inicio__img}/>

            <div className={styles.inicio__textos}>
                <p className={styles.inicio__texto}>Hello! Welcome to 'who's that pokemon?'.</p>
                <p className={styles.inicio__texto}>Here you will have to guess what Pokemon it is just by its silhouette.</p>
                <p className={styles.inicio__texto}>You are ready? Well let's start.</p>
            </div>

            <button 
                type='button'
                className='btn btn-jugar'
                onClick={handlePlay}
            >Play</button>
        </div>
    </main>
  )
}

export default Inicio
import React from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            <div className={styles.barra__brandbox}>
                <a href='/' className={styles.barra__enlace}>
                    <h1 className={styles.barra__brand}>Who's that</h1>
                    <img src='/img/pokelogo.png' alt='Logo Pokemon' className={styles.barra__image} />
                    <h1 className={styles.barra__brand}>?</h1>
                </a>
            </div>

            <div className={styles.barra__option}>
                <i className='bx bx-adjust'></i>
                <p className={styles.barra__optiontext}>Light/Dark Mode</p>
            </div>
        </div>
    </header>
  )
}

export default Header
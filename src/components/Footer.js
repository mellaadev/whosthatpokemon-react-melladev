import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.footer__contenido}`}>
            <a href='/' className={styles.footer__enlace}>
                <h1 className={styles.footer__brand}>Who's that</h1>
                <img src='/img/pokelogo.png' alt='Logo Pokemon' className={styles.footer__image} />
                <h1 className={styles.footer__brand}>?</h1>
            </a>
            <div className={styles.footer__separador}></div>
            <p className={styles.footer__copy}>Developed with ❤️ by <a href='https://franmella.com' target='_blank' rel='noreferrer noopener'>Fran Mella</a></p>
        </div>
    </footer>
  )
}

export default Footer
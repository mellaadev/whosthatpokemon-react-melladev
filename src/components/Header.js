import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

import { setTheme } from "../utils/themes";

const Header = ({ setDark }) => {
    const [ togClass, setTogClass ] = useState("dark");
    let theme = localStorage.getItem("theme");

    const handleOnClick = () => {
        if (localStorage.getItem("theme") === "theme-dark") {
            setTheme("theme-light");
            setTogClass("light");
            setDark(false)
        } else {
            setTheme("theme-dark");
            setTogClass("dark");
            setDark(true)
        }
    };

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
            setDark(true)
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
            setDark(false)
        }
    }, [theme, setDark])

    return (
        <header className={`${styles.header}`}>
            <div className={`contenedor ${styles.barra}`}>
                <div className={styles.barra__brandbox}>
                    <a href="/" className={styles.barra__enlace}>
                        <h1 className={styles.barra__brand}>Who's that</h1>
                        <img
                            src="/img/pokelogo.png"
                            alt="Logo Pokemon"
                            className={styles.barra__image}
                        />
                        <h1 className={styles.barra__brand}>?</h1>
                    </a>
                </div>

                <div className={theme === 'theme-dark' ? styles.barra__option2 : styles.barra__option} onClick={handleOnClick}>
                    <i className="bx bx-adjust"></i>
                    <p className={styles.barra__optiontext}>Light/Dark Mode</p>
                </div>
            </div>
        </header>
    );
};

export default Header;

import { Link } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from "react"

import styles from './Navbar.module.css'
import logo from '../../Img/marvelLogo.png'
import iconHome from '../../Img/iconHome.png'
import iconPerson from '../../Img/iconPersonagens.jpg'
import iconSobre from '../../Img/iconSobre.png'

function Navbar(){
    const navRef = useRef();

    const showBarNav = () => {
        navRef.current.classList.toggle(styles.nav_responsive);
    }

    function apagarLocal(){
        localStorage.clear();
    }

    return (
        <header>
                <Link to='/'>
                    <img src={logo} alt="Marvel" className={styles.logo} />
                </Link>
            <nav className={styles.navbar} ref={navRef} >
                <ul className={styles.list}>
                    <li className={`${styles.item} ${styles.pags}`}>
                        <Link to='/' onClick={apagarLocal} className={styles.link}>
                            <img src={iconHome} alt="Icon Home" className={styles.imgHome} />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className={`${styles.item} ${styles.pags}`}>
                        <Link to='/personagens' onClick={apagarLocal} className={styles.link}>
                            <img src={iconPerson} alt="Icon Person" className={styles.imgPerson} />
                            <span>Personagens</span>
                        </Link>
                    </li>
                    <li className={`${styles.item} ${styles.pags}`}>
                        <Link to='/sobre' onClick={apagarLocal} className={styles.link}>
                            <img src={iconSobre} alt="Icon Sobre" className={styles.imgHome} />
                            <span>Sobre</span>
                        </Link>
                    </li>
                </ul>
                <button className={`${styles.nav_btn} ${styles.nav_btn_close}`} onClick={showBarNav}>
                    <FaTimes />
                </button>
            </nav>
            <button className={`${styles.nav_btn}`} onClick={showBarNav}>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar
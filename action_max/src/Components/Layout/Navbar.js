import { Link } from "react-router-dom"

import Container from "./Container"

import styles from './Navbar.module.css'
import logo from '../../Img/marvelLogo.png'
import iconHome from '../../Img/iconHome.png'
import iconPerson from '../../Img/iconPersonagens.jpg'

function Navbar(){
    return (
      <nav className={styles.navbar}>
        <Container>
            <Link to='/'>
                <img src={logo} alt="Marvel" className={styles.logo} />
            </Link>
            <ul className={styles.list}>
                <li className={`${styles.item} ${styles.home}`}>
                    <Link to='/'>
                        <img src={iconHome} alt="Icon Home" className={styles.imgHome} />
                        <span className={styles.textHome}>Home</span>
                    </Link>
                </li>
                <li className={`${styles.item} ${styles.person}`}>
                    <Link to='/personagens'>
                        <img src={iconPerson} alt="Icon Person" className={styles.imgPerson} />
                        <span className={styles.textPerson}>Personagens</span>
                    </Link>
                </li>
                <li className={`${styles.item} ${styles.sobre}`}>
                    <Link to='/sobre'>
                        
                        <span className={styles.textSobre}>Sobre</span>
                    </Link>
                </li>
            </ul>
        </Container>
      </nav>
    )
}

export default Navbar
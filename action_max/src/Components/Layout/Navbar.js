import { Link } from "react-router-dom"

//import Container from "./Container"

import styles from './Navbar.module.css'
import logo from '../../Img/marvelLogo.png'
import iconHome from '../../Img/iconHome.png'
import iconPerson from '../../Img/iconPersonagens.jpg'

function Navbar(){
    return (
      <nav className={styles.navbar}>
            <Link to='/'>
                <img src={logo} alt="Marvel" className={styles.logo} />
            </Link>
            <ul className={styles.list}>
                <li className={`${styles.item} ${styles.home}`}>
                    <Link to='/' className={styles.link}>
                        <img src={iconHome} alt="Icon Home" className={styles.imgHome} />
                        <span>Home</span>
                    </Link>
                </li>
                <li className={`${styles.item} ${styles.home}`}>
                    <Link to='/personagens' className={styles.link}>
                        <img src={iconPerson} alt="Icon Person" className={styles.imgHome} />
                        <span>Personagens</span>
                    </Link>
                </li>
                <li className={`${styles.item} ${styles.home}`}>
                    <Link to='/sobre' className={styles.link}>
                        
                        <span>Sobre</span>
                    </Link>
                </li>
            </ul>
      </nav>
    )
}

export default Navbar
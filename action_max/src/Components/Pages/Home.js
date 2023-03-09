import styles from './Home.module.css'
//import bg from '../../Img/bg.jpg'

function Home(){
    return (
        <div>
            <div className={styles.bg}>
                <h1 className={styles.title}>BEM VINDO A MARVEL</h1>
            </div>
        </div>
    )
}

export default Home
import React from "react";
import styles from "./Sobre.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Sobre(){
    return (
        <>
            <div className={styles.bg}>
                <header className={styles.header}>
                    <h1>Projeto Action Max </h1>
                </header>
                <main className={styles.main}>
                    <p>Projeto desenvolvido para a disciplina de Programação Web 2 do curso de Sistemas de Informação da IFCE - Campus Cedro, com o objetivo de desenvolver um aplicação web que consuma uma API, na qual foi utilizada a API da Marvel.</p>
                    
                </main>
                <footer className={styles.footer}>
                    <h2>Desenvolvido por:</h2>
                    <p>Isaac Freires:</p>
                    <a href="https://github.com/IsaacF-code" target="_blank" rel="noreferrer">
                        <FaGithub className={`${styles.socialIcon} ${styles.githubIcon}`}/>
                    </a>
                    <a href="https://www.linkedin.com/in/isaac-f-481106118/" target="_blank" rel="noreferrer">
                        <FaLinkedin className={`${styles.socialIcon} ${styles.linkedinIcon}`} />
                    </a>
                    
                </footer>
            </div>
        </>
    )
}

export default Sobre
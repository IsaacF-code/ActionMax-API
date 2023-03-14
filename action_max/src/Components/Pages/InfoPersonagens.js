import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from './InfoPersonagens.module.css';

export default function InfoPersonagens() {
    const {id} = useParams();
    const [item, setItem] = useState()
    useEffect(() => {
        const fetch = async() => {
            const res=await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`)
            setItem(res.data.data.results[0])
        }
        fetch();
    }, [id]);
    return (
      <>
        <div className={styles.header}>
           <Link to="/personagens"><FontAwesomeIcon icon={faArrowLeft} className={styles.icon} /></Link>
            <h1>Informações do Personagem</h1>
        </div>
        {
            (!item)? "":(
            <div className={styles.content}>
                <div className={styles.imagem}>
                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                </div>
                <div className={styles.info}>
                    <h1>Nome:</h1>
                    <h3>{item.name}</h3>

                    <h1>Descrição:</h1>
                    <h3>{item.description ? item.description: "Descrição não disponível"}</h3>
                </div>
            </div>
            )
        }
      </>
    )
  }
  
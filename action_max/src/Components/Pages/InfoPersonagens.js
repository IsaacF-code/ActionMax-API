import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        <div>
            <h1 className={styles.title}>Informações do Personagem</h1>
        </div>
        {
            (!item)? "":(
            <div className={styles.box_content}>
                <div className={styles.right_box}>
                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                </div>
                <div className={styles.left_box}>
                    <h1>{item.name}</h1>
                    <h4>{item.description ? item.description: "Descrição não disponível"}</h4>
                </div>
            </div>
            )
        }
      </>
    )
  }
  
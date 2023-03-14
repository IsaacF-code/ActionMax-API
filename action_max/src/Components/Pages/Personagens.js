import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Card from "../Layout/Card"
import styles from './Personagens.module.css'

export default function Personagens() {

    const [item, setItem] = useState();
    useEffect(() => {
        const link = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a"
        search(link);    
    }, [])

    const searchChar = (value) => {
        const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${value}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`;
        search(url);
    }

    const search = (url) => {
        const fetch = async () => {
            const res = await axios.get(url)
            setItem(res.data.data.results);
        }
        fetch();
    }



return (
    <>
        <div className={styles.search_bar}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            <input type="search" placeholder='Nome do personagem'
                className={styles.search}
                onChange={e => searchChar(e.target.value)}
            />
        </div>
        <div className={styles.content}>
            {
                (!item) ? <p>Não encontrado</p> : <Card data={item} />
            }
        </div>
    </>
)
}


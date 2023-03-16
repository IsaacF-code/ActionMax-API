import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Card from "../Layout/Card"
import styles from './Personagens.module.css'

export default function Personagens() {

    const [item, setItem] = useState();
    useEffect(() => {
        const link = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=66babf1d57dec46391217c896731bfd5&hash=81fb6d76491377eb3bd4baa458a8acc4"
        search(link);    
    }, [])
    
    //Usando 'useEffect' para ter o debounce
    const [searchChar, setSearchChar] = useState("");
    useEffect(() => {
        const getChar = setTimeout(() => {
            const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchChar}&ts=1&apikey=66babf1d57dec46391217c896731bfd5&hash=81fb6d76491377eb3bd4baa458a8acc4`;
            search(url);
        }, 1000);
        return () => clearTimeout(getChar);
    }, [searchChar])

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
                onChange={e => setSearchChar(e.target.value)}
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


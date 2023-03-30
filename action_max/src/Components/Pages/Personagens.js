import { useState, useEffect } from "react"
//import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Card from "../Layout/Card"
import styles from './Personagens.module.css'

export default function Personagens() {
    
    //Verifica se existe um personagem salvo no localStorage
    const [searchChar, setSearchChar] = useState("");
    useEffect(() => {
        if (localStorage.getItem('personagem') !== null) {
            setSearchChar(JSON.parse(localStorage.getItem('personagem')));
        }
    }, []);
    
    //Salva o nome do personagem no localStorage
    const handleChange = (e) => {
        setSearchChar(e.target.value);
        localStorage.setItem('personagem', JSON.stringify(e.target.value));
    }
    
    //Usando 'useEffect' para ter o debounce
    useEffect(() => {
        const getChar = setTimeout(() => {
            let url = searchChar.trim().length > 0 ? `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchChar}&ts=1&apikey=66babf1d57dec46391217c896731bfd5&hash=81fb6d76491377eb3bd4baa458a8acc4`: "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=66babf1d57dec46391217c896731bfd5&hash=81fb6d76491377eb3bd4baa458a8acc4";
            search(url);
        }, 1000);
        return () => clearTimeout(getChar);
    }, [searchChar])
    
    const [item, setItem] = useState();
    const search = (url) => {
        const fetch = async () => {
            const res = await axios.get(url)
            setItem(res.data.data.results);
        }
        fetch();
    }

    // const navigate = useNavigate();

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     navigate(`/personagens/search?q=${searchChar}`)
    // }
    
    const multipleFunctions = (e) => {
        handleChange(e);
        setSearchChar(e.target.value);
        // handleSearch(e);
    }
    
    return (
        <>
        <div className={styles.search_bar}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            <input type="search" placeholder='Nome do personagem'
                className={styles.search}
                value={searchChar}
                onChange={multipleFunctions}
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


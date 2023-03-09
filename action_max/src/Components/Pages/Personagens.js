import { useState, useEffect } from "react"
import axios from "axios";
import Card from "../Layout/Card"
import styles from './Personagens.module.css'

export default function Personagens(){

    const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a")
    const [item,setItem]=useState();
    //const [search,setSearch]=useState("");
    useEffect(()=>{
        const fetch = async() => {
            const res=await axios.get(url)
            setItem(res.data.data.results);
        }
    fetch();
  },[url])
    return (
        <div className={styles.content}>
         
        {
          (!item)?<p>Não encontrado</p>:<Card data={item}/>
        }
       </div>
    )
}


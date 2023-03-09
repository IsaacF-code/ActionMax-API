import { useNavigate } from "react-router-dom"
import styles from './Card.module.css'

export default function Card({ data }) {
    let navigate = useNavigate();
    return (
        <>
        {
            (data) ? (
              data.map(item => {
                return (
                  <div className={styles.card} key={item.id} 
                  onClick={()=>navigate(`/personagens/${item.id}`)}>
                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                    <div className={styles.title}>
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                )
              })
            ):""
        }
        </>  
    )
}

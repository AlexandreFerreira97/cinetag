import styles from './Player.module.css'
import bannerFavoritos from '../../assets/banner-player.png'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
import videos from "json/db.json"

const Player = () => {
    const parametros = useParams();
    const video = videos.find((video) => {return video.id === Number(parametros.id)});
    return(
        <>
            <div>
                <img src={bannerFavoritos} alt = "banner da página" />
            </div>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe width="100%" height="100%" src={video.link} title={video.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player
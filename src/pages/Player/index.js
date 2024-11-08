import styles from './Player.module.css'
import bannerFavoritos from '../../assets/banner-player.png'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
import videos from "json/db.json"

const Player = () => {
    const parametros = useParams();
    const video = videos.find((video) => {return video.id === Number(parametros.id)})
    return(
        <>
            <div>
                <img src={bannerFavoritos} alt = "banner da página" />
            </div>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
        </>
    )
}

export default Player
import styles from './Banner.module.css'
import bannerHome from '../../assets/banner-home.png'

const Banner = () => {
    return(
        <div className={styles.capa}>
            <img src={bannerHome}/>
        </div>
    )
}   

export default Banner
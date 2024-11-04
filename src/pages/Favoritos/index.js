import styles from './Favoritos.module.css'
import bannerFavoritos from '../../assets/banner-favoritos.png'
import Titulo from 'components/Titulo'
import Card from 'components/Card'

const Favoritos = () => {
    return(
        <>
            <div>
                <img src={bannerFavoritos} alt = "banner da página" />
            </div>
            <Titulo>
                <h1>Meus Favoritos!</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id="1" titulo="jcao" capa="https://thecatapi.com/api/images/get?format=src&type=png"/>
            </section>
        </>
    )
}

export default Favoritos
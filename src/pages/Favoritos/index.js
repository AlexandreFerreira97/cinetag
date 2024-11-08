import styles from './Favoritos.module.css'
import bannerFavoritos from '../../assets/banner-favoritos.png'
import Titulo from 'components/Titulo'
import Card from 'components/Card'
import { useFavoritoContext } from 'components/contextos/favoritos'

const Favoritos = () => {
    const {favorito} = useFavoritoContext();
    return(
        <>
            <div>
                <img src={bannerFavoritos} alt = "banner da página" />
            </div>
            <Titulo>
                <h1>Meus Favoritos!</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {return <Card {...fav} key={fav.id}/>})}
            </section>
        </>
    )
}

export default Favoritos
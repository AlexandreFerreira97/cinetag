import { Link } from "react-router-dom"
import logo from './logo.png'
import styles from './Cabecalho.module.css'

const Cabecalho = () => {
    return(
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="logo do cine tag"></img>
            </Link>
            <nav>

            </nav>
        </header>
    )
}

export default Cabecalho
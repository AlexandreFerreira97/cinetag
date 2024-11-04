import { Link } from 'react-router-dom'
import styles from './CabecalhoLink.module.css'
import { Children } from 'react'

const CabecalhoLink = ({url, children}) => {
    return(
        <Link to={url}  className={styles.Link}>
            {children}
        </Link>
    )
}

export default CabecalhoLink
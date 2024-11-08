import Container from "components/Container"
const { default: Cabecalho } = require("components/Cabecalho")
const { default: FavoritosProvider } = require("components/contextos/favoritos")
const { default: Rodape } = require("components/Rodape")
const { Outlet } = require("react-router-dom")

const PaginaBase = () => {
    return(
        <main>
            <Cabecalho/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Rodape/>
        </main>
    )
}

export default PaginaBase
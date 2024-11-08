import Cabecalho from "components/Cabecalho"
import Container from "components/Container"
import FavoritosProvider from "components/contextos/favoritos"
import Rodape from "components/Rodape"
import Favoritos from "pages/Favoritos"
import Inicio from "pages/Inicio"
import Player from "pages/Player"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const AppRoute = () => {
    return(
        <BrowserRouter>
            <Cabecalho/>
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio/>}></Route>
                        <Route path= "/favoritos" element={<Favoritos/>}></Route>
                        <Route path="/:id" element={<Player/>}></Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape/>
        </BrowserRouter>
    )
}

export default AppRoute
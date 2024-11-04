import Inicio from "pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const AppRoute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute
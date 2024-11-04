import Rodape from "components/Rodape"
import Cabecalho from "components/Cabecalho"
import Banner from "components/Banner"
import Card from "components/Card"
import Titulo from "components/Titulo"

const Inicio = () => {
    return(
        <>
            <Cabecalho/>
            <Banner/>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Card id='1' titulo = 'No Pain No Gain' capa = 'https://thecatapi.com/api/images/get?format-src&type=png'/>
            <Rodape/>
        </>
    )
}

export default Inicio
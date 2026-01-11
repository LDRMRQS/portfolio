import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
    <Card>
        <Titulo>Projeto List</Titulo>
        <Paragrafo tipo="secundario">List</Paragrafo>
        <LinkBotao>Visualizar</LinkBotao>
    </Card>
)

export default Projeto

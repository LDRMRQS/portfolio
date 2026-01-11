import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

type Props = {
    name: string
    html_url: string
}

const Projeto = ({ name, html_url }: Props) => (
    <Card>
        <Titulo>Projeto {name}</Titulo>
        <Paragrafo tipo="secundario">{html_url}</Paragrafo>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
            <LinkBotao>Visualizar</LinkBotao>
        </a>
    </Card>
)

export default Projeto

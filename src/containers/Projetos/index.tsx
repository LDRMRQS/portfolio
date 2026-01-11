import { useEffect, useState } from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

type Listas = {
    id: number
    name: string
    html_url: string
}

const Projetos = () => {
    const [lists, setLists] = useState<Listas[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/LDRMRQS/repos?sort=created')
            .then((response) => response.json())
            .then((data) => setLists(data))
            .catch((error) =>
                console.log('Erro ao buscar repositórios:', error)
            )
    }, [])
    return (
        <section>
            <Titulo fontSize={16}>Projetos</Titulo>
            <Lista>
                {lists.map((list) => (
                    <li key={list.id}>
                        <Projeto name={list.name} html_url={list.html_url} />
                    </li>
                ))}
            </Lista>
        </section>
    )
}

export default Projetos

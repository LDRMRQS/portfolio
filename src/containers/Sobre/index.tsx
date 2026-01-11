import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
    <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Paragrafo tipo="principal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
            quo optio consequatur voluptatibus rerum, debitis quae ad
            reprehenderit cumque, laboriosam explicabo laborum harum dolores. Et
            tempora iure ut saepe?
        </Paragrafo>
        <GithubSecao>
            <img
                height="180em"
                src="https://github-readme-stats-sigma-five.vercel.app/api?username=LDRMRQS&show_icons=true&theme=dracula"
            />
            <img
                height="180em"
                src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=LDRMRQS&layout=compact&theme=dracula"
            />
        </GithubSecao>
    </section>
)

export default Sobre

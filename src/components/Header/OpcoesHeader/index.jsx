import { Link } from 'react-router-dom'
import styles from './OpcoesHeader.module.css'

const opcoes = [
    {
        nome: 'CATEGORIAS',
        rota: '/categorias'
    },
    {
        nome: 'FAVORITOS',
        rota: '/favoritos'
    },
    {
        nome: 'MiNHA ESTANTE',
        rota: '/estante'
    }

]
  

const OpcoesHeader = () => {
    return (
        <ul className={styles.opcoes}>
            {opcoes.map((opcao) => (
                <li key={opcao.nome} className={styles.opcao} ><Link className={styles.link} to={opcao.rota}>{opcao.nome}</Link></li>
            ))}
        </ul>
    )
}

export default OpcoesHeader
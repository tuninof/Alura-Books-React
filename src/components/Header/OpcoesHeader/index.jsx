import styles from './OpcoesHeader.module.css'

const opcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const OpcoesHeader = () => {
    return (
        <ul className={styles.opcoes}>
            {opcoes.map((opcao) => (
                <li key={opcao} className={styles.opcao} >{opcao}</li>
            ))}
        </ul>
    )
}

export default OpcoesHeader
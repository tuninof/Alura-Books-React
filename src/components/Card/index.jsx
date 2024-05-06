import styles from './Card.module.css'

const Card = ({ titulo, subtitulo, descricao, imagem }) => {
    return (
        <div className={styles.card}>
            <div>
                <h3>{titulo}</h3>
                <h4>{subtitulo} </h4>
                <p>{descricao}</p>
            </div>
            <div>
                <img src={imagem} />
                <button>Saiba mais</button>
            </div>

        </div>
    )
}

export default Card
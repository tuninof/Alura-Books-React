import styles from './IconesHeader.module.css'
import perfil from '../../../image/perfil.svg'
import sacola from '../../../image/sacola.svg'

const icones = [perfil, sacola]

const IconeHeader = () => {
    return (
        <ul className={styles.icones} >
            {icones.map((icone) => (
                <li key={icone} ><img className={styles.icone} src={icone} /></li>
            ))}
        </ul>
    )
}

export default IconeHeader 
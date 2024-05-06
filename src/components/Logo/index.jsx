import styles from "./Logo.module.css"
import logo from "../../image/logo.svg"

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logo} />
            <p><strong>Alura</strong>Books</p>

        </div>
    )
}

export default Logo
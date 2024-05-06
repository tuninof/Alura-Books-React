import Logo from "../Logo"
import styles from "./Header.module.css"
import IconeHeader from "./IconesHeader"
import OpcoesHeader from "./OpcoesHeader"

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
           <OpcoesHeader />
           <IconeHeader />
        </header>
    )
}

export default Header
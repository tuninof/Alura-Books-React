import { Link } from "react-router-dom"
import Logo from "../Logo"
import styles from "./Header.module.css"
import IconeHeader from "./IconesHeader"
import OpcoesHeader from "./OpcoesHeader"

const Header = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.link} to={"/"}>
                <Logo />
            </Link>
            <OpcoesHeader />
            <IconeHeader />
        </header>
    )
}

export default Header
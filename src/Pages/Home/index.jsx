import styles from "./Home.module.css"
import Pesquisa from "../../components/Pesquisa"
import UltimosLancamentos from "../../components/UltimosLancamentos"

const Home = () => {
    return (
        <div>
            <Pesquisa />
            <UltimosLancamentos />
        </div>

    )
}

export default Home
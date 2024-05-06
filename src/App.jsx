import "./App.css"
import Header from "./components/Header"
import Pesquisa from "./components/Pesquisa"
import UltimosLancamentos from "./components/UltimosLancamentos"


const App = () => {
  return (
    <div className="App">
     <Header />
     <Pesquisa />
     <UltimosLancamentos />
    </div>
  )
}

export default App
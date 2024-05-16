import "./App.css"
import Favoritos from "./Pages/Favoritos"
import Home from "./Pages/Home"
import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/favoritos' element={<Favoritos />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
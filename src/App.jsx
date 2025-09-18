import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import IncomeForm from './components/IncomeForm'
import Home from './pages/Home'
import About from './pages/About'
import Finances from './pages/Finances'

function App() {
  return (
    <>
      <header>
        <nav className="flex items-center">
          <Link to="/">Ínicio</Link>
          <Link to="/finances">Finanças</Link>
          <Link to="/about">Sobre</Link>
        </nav>
      </header>

      <IncomeForm></IncomeForm>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/finances" element={<Finances />} />
      </Routes>
    </>
  )
}

export default App
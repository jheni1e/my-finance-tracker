import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Finances from './pages/Finances'
import ExpenseForm from './components/ExpenseForm'
import IncomeForm from './components/IncomeForm'

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/finances" element={<Finances />} />
        <Route path="/expense" element={<ExpenseForm />} />
        <Route path="/income" element={<IncomeForm />} />
      </Routes>
    </>
  )
}

export default App
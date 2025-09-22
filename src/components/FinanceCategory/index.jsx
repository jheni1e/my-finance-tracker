import './index.css'
import { useState } from "react";

export default function FinanceCategory({ type }) {
    const [option, setOption] = useState("");

    const handleChange = (e) => {
      setOption(e.target.value);
    }

    const expenseOptions = [
    "Gastos Fixos",
    "Alimentação",
    "Transporte",
    "Gastos Pessoais",
    "Cartão de Crédito",
    "Investimentos",
    "Imprevistos"
  ];

  const incomeOptions = [
    "Salário",
    "Investimentos",
    "Freelance",
    "Negócios/Vendas"
  ];

  const options = type === "expense" ? expenseOptions : incomeOptions;

  return (
    <>
        <select className="dropdown" value={option} onChange={handleChange}>
        {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
        ))}
        </select>
    </>
  );
}
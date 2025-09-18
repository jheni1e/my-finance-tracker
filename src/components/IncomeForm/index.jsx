import './index.css'
import Button from '../Button'
import FinanceBox from '../FinanceBox'
import FinanceCategory from '../FinanceCategory'
import TextBox from '../TextBox'
import DateTime from '../DateTime'

export default function IncomeForm() {
    return (
        <>
        <h2 className='text-blue-950'>Formulário de Receita</h2>
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-between">
                <TextBox placeholder="Nome"></TextBox>
                <FinanceBox></FinanceBox>
            </div>
            <div className="flex flex-row justify-between">
                <FinanceCategory type="income"></FinanceCategory>
                <DateTime></DateTime>
            </div>
            <Button text="Salvar"></Button>
        </div>
        </>
    );
}
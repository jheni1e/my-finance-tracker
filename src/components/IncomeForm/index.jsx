import './index.css'
import Button from '../Button'
import FinanceBox from '../FinanceBox'
import FinanceCategory from '../FinanceCategory'
import TextBox from '../TextBox'

export default function IncomeForm() {
    return (
        <>
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-between">
                <TextBox placeholder="Nome"></TextBox>
                <FinanceBox></FinanceBox>
            </div>
            <div className="flex flex-row justify-between">
                <FinanceCategory type="income"></FinanceCategory>
                <Button text="Salvar"></Button>
            </div>
        </div>
        </>
    );
}
import './index.css'
import { useState } from "react";

export default function FinanceBox() {
    const [value, setValue] = useState(0.0);
    const [display, setDisplay] = useState('0.00');

    const handleChange = (e) => {
        let val = e.target.value.replace(/[^0-9.,]/g, '');
        val = val.replace(',', '.');
        const num = parseFloat(val);

        if (!isNaN(num) && num >= 0) {
            setValue(num);
            setDisplay(val);
        } else {
            setDisplay('0.00');
        }
    }

    const handleBlur = () => {
        setDisplay(value.toFixed(2));
    }

    return (
        <input
            type="text"
            className="button"
            onChange={handleChange}
            onBlur={handleBlur}
            value={`R$ ${display}`}
        />
    );
}
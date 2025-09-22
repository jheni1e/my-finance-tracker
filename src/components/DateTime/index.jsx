import './index.css'
import { useState } from "react";

export default function DateTime() {
    const [datetime, setDatetime] = useState(new Date().getDate());

    const handleChange = (event) => {
        setDatetime(event.target.value);
    };

    return (
        <>
            <input
                type="date"
                id="date"
                value={datetime}
                onChange={handleChange}
                className="datetime"
            />
        </>
    );
}
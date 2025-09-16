import { useState } from 'react';
import './index.css'

export default function TextBox({ placeholder = "" }) {
    const [text, setText] = useState("");

    return (
        <>
            <input type="text"
                className="textbox"
                placeholder={placeholder}
                onChange={(e) => setText(e.target.value)}
                value={text}/>
        </>
    );
}
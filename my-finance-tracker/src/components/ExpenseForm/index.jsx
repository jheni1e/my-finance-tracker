import { useState, useEffect } from 'react';
import Button from '../Button';

export default function ExpenseForm() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [value, setValue] = useState(0.00);
    const categories = ["Food", "Transport", "Fun", "Bills"];

    return (
        <>
        <div className="center">
            <form>
                <label>Title:
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}></input>
                </label>
                <label>Description:
                    <input
                    type="text"
                    value={text}
                    onChange={(e) => {setText(e.target.value)}}></input>
                </label>
            </form>
            <Button text="Save"></Button>
        </div>
        </>
    );
}
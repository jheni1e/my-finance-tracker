import './index.css'

export default function Button({ type = "primary", text = "" }) {
    return (
        <>
        <button className={type}>{text}</button>
        </>
    );
}
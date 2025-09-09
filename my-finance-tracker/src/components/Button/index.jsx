import './index.css'

export default function Button({ text, type = "primary" }) {
    return (
        <>
        {type === "primary" &&
        <button className="a">{text}</button>}
        {type === "secondary" &&
        <button className="b">{text}</button>}
        </>
    )
}
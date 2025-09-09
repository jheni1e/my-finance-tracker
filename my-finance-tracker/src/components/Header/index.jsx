import './index.css';

export default function Header() {
    return (
        <header className="header">
            <h1 className="title">My Finance Tracker</h1>
            <nav>
                <a href="#home" className="link">Home</a>
                <a href="#expenses" className="link">Expenses</a>
                <a href="#about" className="link">About</a>
            </nav>
        </header>
    );
}
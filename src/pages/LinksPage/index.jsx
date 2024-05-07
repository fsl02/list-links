import { Link } from "react-router-dom";
import ListLinks from "../../components/ListLinks";
import './LinksPage.css';
import { ThemeContext } from "../../context/ThemeContext";
import { useState } from "react";

export default function LinksPage() {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={theme}>
            <Link to="/login">Login</Link>
            <ListLinks />
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle</button>
        </ThemeContext.Provider>
    )
}
import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Menu() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <div className="menu">
            <h1>ChatGPT</h1>
            <nav>
                <Link to="/">Home</Link>
                {/* Add more links if needed */}
            </nav>
            <button className="theme-btn" onClick={toggleTheme}>
                {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    );
}

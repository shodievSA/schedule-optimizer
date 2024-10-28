import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(
        localStorage.getItem('user-theme') || 'light'
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('user-theme', theme);
    }, [theme]);

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );

}

export default ThemeContext;
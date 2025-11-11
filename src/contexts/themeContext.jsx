import { createContext, use, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => use(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        // console.log('Saved theme:', savedTheme);
        //  console.log('Theme:', theme);
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme('light');
            // console.log('Else:', theme)
        }
    }, []);

    useEffect(() => {
        document.body.className = theme;
        // document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
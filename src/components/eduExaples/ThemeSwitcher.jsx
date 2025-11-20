import { useTheme } from '../../contexts/themeContext.jsx';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return <button onClick={toggleTheme}>Switch to {theme === "light" ? "Dark" : "Light"} </button>

};

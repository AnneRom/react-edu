import { useUser } from '../../contexts/userContext.jsx';
import { useTheme } from '../../contexts/themeContext.jsx';
import { useState } from 'react';
import clsx from 'clsx';

export const UserMenu = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const { isLoggedIn, username, logIn, logOut } = useUser();
    const handleLogin = () => {
        logIn(inputValue, inputPassword);
        setInputValue("");
    }
    const { theme } = useTheme();

    return (
    <div>
        {isLoggedIn ? (
        <>
            <p>Welcome, {username}</p>
            <button onClick={logOut}>Вийти з профілю</button>
        </>
    ) : (
        <>
        <input type="text" 
        placeholder="Введіть ім'я користувача" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}/>
        <hr />
        <input type="password"
        placeholder="Введіть пароль користувача" 
        value={inputPassword} 
        onChange={(e) => setInputPassword(e.target.value)}
         />
        <hr />
        <button onClick={handleLogin} className={clsx("login-button", theme === 'dark' ? 'dark-button' : 'light-button')}>
               Увійти в профіль
        </button>
        </>    
    )}
    </div>
    );
};
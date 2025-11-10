import { useUser } from '../contexts/userContext.jsx';
import { useState } from 'react';

export const UserMenu = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const { isLoggedIn, username, logIn, logOut } = useUser();
    const handleLogin = () => {
        logIn(inputValue, inputPassword);
        setInputValue("");
    }

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
        <button onClick={handleLogin}>Увійти в профіль</button>
        </>    
    )}
    </div>
    );
};
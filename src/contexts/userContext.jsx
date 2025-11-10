import { createContext, use, useState } from 'react';

export const UserContext = createContext();

export const useUser = () => use(UserContext)

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    const logIn = (inputName, inputPassword) => {
        if ((inputPassword === "123") && (inputName === "Hanna")) {
            setIsLoggedIn(true);
            setUsername(inputName);
        }
    };
    const logOut = () => {
        setIsLoggedIn(false);
        // setUsername(null);
    };

    return (
        <UserContext.Provider value={ { isLoggedIn, username, logIn, logOut} }>
            {children}
        </UserContext.Provider>

    );
};
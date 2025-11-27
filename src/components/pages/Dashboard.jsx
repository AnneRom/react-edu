import { Navigate } from "react-router-dom";
import { useUser } from "../../contexts/userContext.jsx";

export const Dashboard = () => {
    const { isLoggedIn, username, logOut } = useUser();
        if (!isLoggedIn) {
            return <Navigate to="/login" replace />;
        }
    return (
        <div>
             <h1>Ласкаво просимо в особистий кабінет, {username}</h1>
             <button onClick={logOut}>Вийти з профілю</button>
        </div>
    ) 
};
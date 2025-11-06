import { useUser } from '../contexts/userContext.js';

export const UserMenu = () => {

    const { username, isLoggedIn } = useUser();
    return (
    <div>
        <p>{username}</p>
        <p>{isLoggedIn}</p>
        <button>Log out</button>
    </div>
    );
};
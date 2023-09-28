import { useAuthContext } from "../contexts/AuthContext";
import { Outlet, Navigate } from 'react-router-dom';

const LoggedInProtect = () => {

    const { isAuthenticated } = useAuthContext()

    if (isAuthenticated) {
        return <Navigate to='/' />
    }
    return <Outlet />
}

export default LoggedInProtect;


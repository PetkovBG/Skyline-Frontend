import { useAuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from 'react-router-dom';

const LoggedInGuard = () => {

    const { isAuthenticated } = useAuthContext()
    
    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }
    return <Outlet />
}

export default LoggedInGuard;
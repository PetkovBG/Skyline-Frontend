import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { authServiceFactory } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { mapMongooseErrors } from '../utils/mapMongooseErrors';

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children, addSystemMsg }) => {
    const navigate = useNavigate();

    const [auth, setAuth] = useLocalStorage('auth', {});
    const authService = authServiceFactory();

    const onRegisterSubmit = async (registerValues) => {
        if (registerValues.confirmPassword !== registerValues.password) {
            console.log('Error in onRegisterSubmit');
            addSystemMsg({ text: 'Password mismatch!', type: 'error' });
            throw new Error();
        }

        try {
            const result = await authService.register(registerValues);
            setAuth(result);
            navigate('/login');
            addSystemMsg({ text: 'Signed up successfully.', type: 'success' });
        } catch (error) {
            const displayError = mapMongooseErrors(error)
            addSystemMsg({ text: displayError, type: 'error' });
            // addSystemMsg({ text: error.error, type: 'error' });
        }
    };

    const onLoginSubmit = async (loginData) => {
        try {
            const result = await authService.login(loginData);
            setAuth(result.loginData);
            addSystemMsg({ text: 'Logged in successfully.', type: 'success' });
            navigate('/');
        } catch (error) {
            const displayError = mapMongooseErrors(error)
            addSystemMsg({ text: displayError, type: 'error' });
            console.log('catch - onLoginSubmit');
        }
    };

    const onLogout = async () => {
        setAuth({});
        navigate('/');
        addSystemMsg({ text: 'Logged out successfully.', type: 'success' });
    };

    const contextValues = {
        onRegisterSubmit,
        onLoginSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.userEmail,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
};

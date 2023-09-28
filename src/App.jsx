import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { AuthContextProvider } from './contexts/AuthContext';
import { PropertyContextProvider } from './contexts/PropertyContext';
import { UserContextProvider } from './contexts/UserContext';
import useSystemMsgs from './hooks/useSystemMsgs';
import SystemMessages from './modules/common/SystemMessages';

const App = () => {
    const { addSystemMsg, systemMsgs } = useSystemMsgs();
    return (
        <div>
            <SystemMessages systemMsgs={systemMsgs} />
            <BrowserRouter>
                <AuthContextProvider addSystemMsg={addSystemMsg}>
                    <UserContextProvider>
                        <PropertyContextProvider addSystemMsg={addSystemMsg}>
                            <Routes />
                        </PropertyContextProvider>
                    </UserContextProvider>
                </AuthContextProvider>
            </BrowserRouter>
        </div>
    );
};

export default App;

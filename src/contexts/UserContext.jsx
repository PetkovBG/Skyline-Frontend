import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import userServiceFactory from "../services/userService";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {

    const userService = userServiceFactory();

    const { userId } = useAuthContext();

    const [userData, setUserData] = useState();

    const fetchUserData = async (userID = userId) => {
        try {
            const user = await userService.getUser(userID);
            setUserData(user.data);
        } catch (error) {
            throw new Error('Error fetching user data')
        }
    }

    useEffect(() => {
        if (userId) {
            fetchUserData(userId);
        }
    }, [userId]);

    const contextValues = {
        userData,
        setUserData,
        fetchUserData,
    }

    return (
        <>
            <UserContext.Provider value={contextValues}>
                {children}
            </UserContext.Provider>
        </>
    )

}

export const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}
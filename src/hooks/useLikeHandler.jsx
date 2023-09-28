import { useAuthContext } from '../contexts/AuthContext';
import { useUserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import propertyServiceFactory from '../services/propertyService';

const useLikeHandler = () => {
    const navigate = useNavigate();
    const propertyService = propertyServiceFactory();

    const { userId } = useAuthContext();

    const { fetchUserData } = useUserContext();

    const onLikeHandler = async (e, propertyId) => {
        e.stopPropagation();
        if (!userId) {
            navigate('/login');
        }
        try {
            await propertyService.like(propertyId);
            fetchUserData(userId);
        } catch (error) {
            throw new Error('Error in liking property');
        }
    };
    return { onLikeHandler };
};

export default useLikeHandler;

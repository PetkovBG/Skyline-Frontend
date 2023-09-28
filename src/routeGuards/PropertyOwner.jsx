import { useParams, useNavigate } from "react-router";
import { usePropertyContext } from "../contexts/PropertyContext";
import { useAuthContext } from "../contexts/AuthContext";
import { useEffect, useState } from "react";


const PropertyOwner = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { propertyId } = useParams();
    const { getProperty } = usePropertyContext();
    const { userId } = useAuthContext();

    const navigate = useNavigate();

    useEffect(() => {
        const checkOwnership = async () => {
            try {
                const currentProp = await getProperty(propertyId);
                if (currentProp && currentProp.userId._id !== userId) {
                    if ((currentProp.status === 'sold' || currentProp.status === 'rented' || currentProp.status === 'inactive')) {
                        navigate('/');
                    } else {
                        navigate(`/${currentProp.status}/${propertyId}`);
                    }
                } else {
                    setIsLoading(false)
                }
            } catch (error) {
                console.log('Error', error);
                setIsLoading(false)
            }

        }
        checkOwnership()
    }, [propertyId, userId, getProperty, navigate]);

    if (isLoading) {
        return <p>Loading...</p>
    }
    return children;
}

export default PropertyOwner;
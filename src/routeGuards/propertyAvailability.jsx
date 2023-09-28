import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { usePropertyContext } from "../contexts/PropertyContext";


export const PropertyAvailability = ({ children }) => {
    const { getProperty } = usePropertyContext();
    const { propertyId } = useParams();

    const path = window.location.pathname;
    const status = path.split('/')[1];

    const navigate = useNavigate();
    useEffect(() => {
        const checkAvailability = async () => {
            try {
                const property = await getProperty(propertyId);
               if(property.status !== status) {
                navigate('/404')
               } 
            } catch (error) {
                navigate('/404');
                throw new Error('Error in PropertyAvailability');
            }
        }
        checkAvailability();
    }, [getProperty, propertyId, navigate]);
    return children;
}
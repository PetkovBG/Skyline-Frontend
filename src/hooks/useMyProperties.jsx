import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useUserContext } from "../contexts/UserContext";
import propertyServiceFactory from "../services/propertyService";


export const useMyProperties = ({ arrayKey }) => {
    const propertyService = propertyServiceFactory();
    const { userData, fetchUserData } = useUserContext();
    const { userId } = useAuthContext();
    const [myProperties, setMyUserProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(myProperties[0]);

    useEffect(() => {
        if(filteredProperties.length === 0) {
            setSelectedProperty(null);
        }
    }, [filteredProperties.length])

    useEffect(() => {
        fetchUserData(userId)
    }, []);

    useEffect(() => {
        try {
            if (userData && userData[arrayKey]) {

                const propertyArray = userData[arrayKey];
                const propertyPromises = propertyArray.map(property => {
                    return propertyService.getOne(property);
                });
                Promise.all(propertyPromises)
                    .then(results => {
                        setMyUserProperties(results);
                        setFilteredProperties(results);
                        if (results.length > 0) {
                            setSelectedProperty(results[0]);

                        }
                    })
                    .catch(error => {
                        throw new Error('Error fetching property data: ' + error);
                    });

            }
        } catch (error) {
            throw new Error('error in My properties useEffect');
        }
    }, [userData, arrayKey]);

    const handleOnClick = (property) => {
        setSelectedProperty(property)
    }

    const onSearchHandler = (e) => {
        const searchParam = e.target.value.toLowerCase();
        if (!searchParam) {
            setFilteredProperties(myProperties);
        }
        setFilteredProperties(myProperties.filter(property => property.location.city.toLowerCase().includes(searchParam)));
    }

    return {
        handleOnClick,
        onSearchHandler,
        filteredProperties,
        setFilteredProperties,
        selectedProperty,
    }
}

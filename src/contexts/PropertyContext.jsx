import { useContext, createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import propertyServiceFactory from '../services/propertyService';
import { useUserContext } from './UserContext';
import { useMyProperties } from '../hooks/useMyProperties';

const PropertyContext = createContext(null);

export const PropertyContextProvider = ({ children, addSystemMsg }) => {

    const navigate = useNavigate();
    const propertyService = propertyServiceFactory();

    const [properties, setProperties] = useState([]);
    const [totalCount, setTotalCount] = useState(0);

    const { setUserData } = useUserContext();

    const getAllPropertiesForRent = (query) => {
        const forRentQuery = '?status=for-rent&' + query;
        propertyService
            .getAll(forRentQuery)
            .then((result) => {
                setProperties(result.properties);
                setTotalCount(result.totalCount);
            })
            .catch((error) => {
                console.log('getAllPropertiesForRentError', error);
            });
    };

    const getAllPropertiesForSale = (query) => {
        const forSaleQuery = '?status=for-sale&' + query;
        propertyService
            .getAll(forSaleQuery)
            .then((result) => {
                setProperties(result.properties);
                setTotalCount(result.totalCount);
            })
            .catch((error) => {
                console.log('getAllPropertiesForSaleError', error);
            });
    };

    const onCreateSubmit = async (propertyData, setIsLoading) => {
        try {
            const reponse = await propertyService.create(propertyData);
            const newProperty = reponse.data;
            setProperties((state) => [...state, newProperty]);
    
            setUserData((state) => {
                const updatedProperties = [...state.properties, newProperty._id];
                return {
                    ...state,
                    properties: updatedProperties,
                };
            });
    
            navigate(`/${newProperty.status}/${newProperty._id}`);
            addSystemMsg({
                text: 'Property created successfully.',
                type: 'success',
            });
        } catch (error) {
            setIsLoading(false);
            addSystemMsg({
                text: 'Please enter valid data',
                type: 'error',
            });
        }
       
    };

    const onPropertyEditSubmit = async (data) => {
         await propertyService.edit(data._id, data);
      

        navigate(`/${data.status}/${data._id}`);
        addSystemMsg({
            text: 'Property edited successfully.',
            type: 'success',
        });
    };

    const onPropertyStatusUpdate = async (data) => {
         await propertyService.edit(data._id, data);
    }

    const getProperty = async (propertyId) => {
        try {
            const foundProperty = await propertyService.getOne(propertyId);
            return foundProperty;
        } catch (error) {
            navigate('/404')
            throw new Error('Error in getProperty');
        }
    };

    const deleteProperty = (propertyId, flag) => {
        propertyService.delete(propertyId).then(() => {
            setProperties((state) => state.filter((x) => x._id !== propertyId));

            setUserData((state) => {
                const updatedProperties = state.properties.filter(
                    (property) => property !== propertyId
                );
                return {
                    ...state,
                    properties: updatedProperties,
                };
            });
        });

        if (!flag) {
            navigate('/');
        }

        addSystemMsg({
            text: 'Property deleted successfully.',
            type: 'success',
        });
    };

    const contextValues = {
        properties,
        setProperties,
        getAllPropertiesForRent,
        getAllPropertiesForSale,
        onCreateSubmit,
        onPropertyEditSubmit,
        getProperty,
        deleteProperty,
        totalCount,
        onPropertyStatusUpdate,
    };

    return (
        <>
            <PropertyContext.Provider value={contextValues}>
                {children}
            </PropertyContext.Provider>
        </>
    );
};

export const usePropertyContext = () => {
    const context = useContext(PropertyContext);

    return context;
};

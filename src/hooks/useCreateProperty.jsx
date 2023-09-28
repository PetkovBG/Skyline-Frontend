import { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import propertyServiceFactory from '../services/propertyService';

const useCreateProperty = (propertyId) => {
    const { userId } = useAuthContext();
    const propertyService = propertyServiceFactory();
    const [imagesToBeDeleted, setImagesToBeDeleted] = useState([]);
    const [property, setProperty] = useState({
        title: '',
        description: '',
        type: '',
        location: {
            address: '',
            city: '',
            state: '',
            zipcode: '',
        },
        price: '',
        area: '',
        bedrooms: '',
        bathrooms: '',
        images: [],
        features: [],
        userId: userId,
        status: 'for-rent',
    });

    const addImageToBeDeleted = (url) => {
        setImagesToBeDeleted((images) => [...images, url]);
    };

    useEffect(() => {
        if (propertyId) {
            propertyService.getOne(propertyId).then((result) => {
                setProperty(result);
            });
        }
    }, [propertyId]);

    const handleInputKeyDown = (e) => {
        const inputValue = e.target.value.trim();
        if (e.key === 'Enter' || e.type === 'blur') {
            e.preventDefault();

            if (property.features.includes(inputValue)) {
                alert('Duplicate feature');
            }
            if (inputValue !== '') {
                const newFeatures = inputValue
                    .split(',')
                    .map((feature) => feature.trim());

                const uniqueNewFeatures = newFeatures.filter(
                    (feature) =>
                        feature !== '' &&
                        !feature.startsWith(' ') &&
                        !feature.endsWith(' ') &&
                        !property.features.includes(feature)
                );

                if (uniqueNewFeatures.length > 0) {
                    const updatedProperty = {
                        ...property,
                        features: [...property.features, ...uniqueNewFeatures],
                    };

                    setProperty(updatedProperty);
                    e.target.value = '';

                }
            }
        } else if (e.key === 'Backspace' && inputValue === '') {
            e.preventDefault();
            const featuresCopy = [...property.features];

            if (featuresCopy.length > 0) {
                featuresCopy.pop();
                setProperty({
                    ...property,
                    features: featuresCopy,
                });
            }
        }
    };

    const removeFeature = (featureToRemove) => {
        setProperty({
            ...property,
            features: property.features.filter(
                (feature) => feature !== featureToRemove
            ),
        });
    };

    return {
        property,
        setProperty,
        handleInputKeyDown,
        removeFeature,
        imagesToBeDeleted,
        addImageToBeDeleted,
    };
};

export default useCreateProperty;

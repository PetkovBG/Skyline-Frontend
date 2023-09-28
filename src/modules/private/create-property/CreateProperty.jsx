import { useState } from 'react';
import useCreateProperty from '../../../hooks/useCreateProperty';
import { usePropertyContext } from '../../../contexts/PropertyContext';
import { urlTofirebaseUrl } from '../../../utils/helpers';
import PropertyForm from '../common/PropertyForm';

const CreateProperty = () => {
    const { onCreateSubmit } = usePropertyContext();
    const { property, setProperty, handleInputKeyDown, removeFeature } =
        useCreateProperty();
    const [isLoading, setIsLoading] = useState(false);

    //TODO add input field validation
    // const [error, setError] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const toFirebaseUrls = property.images.map(urlTofirebaseUrl);
            const firebaseUrls = await Promise.all(toFirebaseUrls);
            onCreateSubmit({ ...property, images: firebaseUrls }, setIsLoading);
        } catch (error) {
            console.log('ERROR', error.message);
        }
    };

    return (
        <>
            {isLoading ? (
                <div className="fixed top-0 bottom-0 z-20 right-0 left-14 flex justify-center items-center dark:bg-slate-900 bg-white opacity-80">
                    <i className="fas fa-spinner fa-pulse text-indigo-600 dark:text-indigo-200 text-5xl"></i>
                </div>
            ) : null}
            <PropertyForm
                property={property}
                setProperty={setProperty}
                onSubmit={onSubmit}
                heading={'Create Property'}
                handleInputKeyDown={handleInputKeyDown}
                removeFeature={removeFeature}
            />
        </>
    );
};

export default CreateProperty;

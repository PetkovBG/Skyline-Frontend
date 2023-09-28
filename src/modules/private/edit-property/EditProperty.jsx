import { useParams } from 'react-router-dom';
import useCreateProperty from '../../../hooks/useCreateProperty';
import { usePropertyContext } from '../../../contexts/PropertyContext';
import {
    deleteImageFromFirebase,
    urlTofirebaseUrl,
} from '../../../utils/helpers';
import PropertyForm from '../common/PropertyForm';

const EditProperty = () => {
    const { propertyId } = useParams();
    const {
        property,
        setProperty,
        handleInputKeyDown,
        removeFeature,
        addImageToBeDeleted,
        imagesToBeDeleted,
    } = useCreateProperty(propertyId);

    // TODO - add input validation const [error, setError] = useState('');
    const { onPropertyEditSubmit } = usePropertyContext();

    const onSubmit = async (e) => {
        e.preventDefault();
        const toFirebaseUrls = property.images.map((image) =>
            image.startsWith('blob:http') ? urlTofirebaseUrl(image) : image
        );
        const firebaseUrls = await Promise.all(toFirebaseUrls);

        if (imagesToBeDeleted.length > 0) {
            imagesToBeDeleted.forEach(
                async (image) => await deleteImageFromFirebase(image)
            );
        }
        await onPropertyEditSubmit({ ...property, images: firebaseUrls });
    };

    return (
        <PropertyForm
            property={property}
            setProperty={setProperty}
            onSubmit={onSubmit}
            heading={'Edit Property'}
            handleInputKeyDown={handleInputKeyDown}
            removeFeature={removeFeature}
            addImageToBeDeleted={addImageToBeDeleted}
        />
    );
};

export default EditProperty;

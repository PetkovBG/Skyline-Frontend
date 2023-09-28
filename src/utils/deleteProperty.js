
import { deleteImageFromFirebase } from '../utils/helpers'

export const onDeleteClick = async (property, deleteProperty, stayOnPageFlag) => {
    
    const confirmation = window.confirm(
        `Are you sure you want to delete ${property.title}?`
    );
    if (confirmation) {
        deleteProperty(property._id, stayOnPageFlag);

        if (property.images.length > 0) {
            property.images.forEach(async (image) => {
                console.log('DELETED FROM FIREBASE', image);
                await deleteImageFromFirebase(image);
            });
        }
    }
}
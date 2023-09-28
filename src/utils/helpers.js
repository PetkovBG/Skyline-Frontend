import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytes,
} from 'firebase/storage';
import { storage } from '../firebase';
import { v4 } from 'uuid';

export const fileToUrl = (file) => URL.createObjectURL(file);

export const urlTofirebaseUrl = async (url) => {
    const response = await fetch(url);
    const image = await response.blob();

    const storageRef = ref(storage, `images/image-${v4()}`);
    const snapshot = await uploadBytes(storageRef, image);
    const firebaseUrl = await getDownloadURL(snapshot.ref);

    return firebaseUrl;
};

export const deleteImageFromFirebase = async (url) => {
    const storageRef = ref(storage, url);
    return await deleteObject(storageRef);
};

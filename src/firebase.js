import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBGvZIxDU5v4q9bZQPryBxr9ZwV6sm_m7E',
    authDomain: 'wave-9-project.firebaseapp.com',
    projectId: 'wave-9-project',
    storageBucket: 'wave-9-project.appspot.com',
    messagingSenderId: '237569237640',
    appId: '1:237569237640:web:a7eaf2026edaa2307ff53d',
    measurementId: 'G-CN54PKF7W4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

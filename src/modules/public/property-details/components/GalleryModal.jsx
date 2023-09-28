import { useState, useEffect } from 'react';
import { useScrollLock } from '../../../../hooks/useScrollLock.js';

const GalleryModal = ({ isOpen, images, activeImgIndex, closeModal }) => {
    const { lockScroll, unlockScroll } = useScrollLock();
    const [openImgIndex, setOpenImgIndex] = useState(activeImgIndex);

    useEffect(() => {
        setOpenImgIndex(activeImgIndex);
    }, [isOpen, activeImgIndex]);

    useEffect(() => {
        if (isOpen) {
            lockScroll();
        } else {
            unlockScroll();
        }
    }, [isOpen, lockScroll, unlockScroll]);

    const getNextImgIndex = () => {
        if (openImgIndex === images.length - 1) {
            return 0;
        }
        return openImgIndex + 1;
    };

    const getPrevImgIndex = () => {
        if (openImgIndex === 0) {
            return images.length - 1;
        }
        return openImgIndex - 1;
    };

    return (
        <div
            className={`${
                isOpen
                    ? 'fixed top-0 left-0 z-[9999] w-[100%] h-[100vh] overflow-hidden bg-black bg-opacity-50'
                    : 'hidden'
            }`}
            onClick={() => closeModal()}
        >
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex w-[100%] md:w-max h-[50%] md:h-auto">
                <div></div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setOpenImgIndex(() => getPrevImgIndex());
                    }}
                    className="flex py-10 text-4xl text-white bg-transparent self-center border-none "
                >
                    <i className="fas fa-chevron-left text-8xl hover:text-indigo-400"></i>
                </button>
                <img
                    src={images[openImgIndex]}
                    alt="open"
                    onClick={(e) => e.stopPropagation()}
                    className="w-[50vw] mx-5 object-contain rounded"
                />
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setOpenImgIndex(() => getNextImgIndex());
                    }}
                    className="flex py-10 text-4xl text-white bg-transparent self-center border-none "
                >
                    <i className="fas fa-chevron-right text-8xl hover:text-indigo-400"></i>
                </button>
            </div>
        </div>
    );
};

export default GalleryModal;

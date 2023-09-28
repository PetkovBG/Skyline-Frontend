import { useState } from 'react';
import GalleryModal from './GalleryModal';

const Gallery = ({ images }) => {
    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(() => false);
    };

    return (
        <>
            <GalleryModal
                isOpen={isOpen}
                images={images}
                activeImgIndex={activeImgIndex}
                closeModal={closeModal}
            />

            <div className="flex flex-col md:flex-row items-center gap-10 w-full h-[66vh]">
                <div className="w-[75%] h-full mb-5 md:mb-0 ">
                    <img
                        src={images[activeImgIndex]}
                        alt="active"
                        onClick={() => setIsOpen(() => true)}
                        className="w-full h-full object-cover select-none pointer-events-none md:pointer-events-auto rounded cursor-pointer"
                    />
                </div>
                <div className="flex flex-row md:flex-col w-[25%] h-full gap-5 overflow-x-auto md:overflow-y-hidden">
                    {images.map((image, index) => (
                        <img
                            src={image}
                            alt={`option-${index}`}
                            onClick={() => setActiveImgIndex(() => index)}
                            className={`${
                                activeImgIndex === index
                                    ? 'border-2 border-indigo-500 p-1'
                                    : 'border-2 border-transparent hover:border-indigo-200 p-1'
                            } w-full h-[48%] object-cover select-none rounded`}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;

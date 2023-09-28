import React, { useRef } from 'react';
import { fileToUrl } from '../../../utils/helpers';

const ImageUploader = ({ property, setProperty, addImageToBeDeleted }) => {
    const inputRef = useRef(null);
    const MAX_LENGTH = 8;
    const imgPlaceholderArray = new Array(
        MAX_LENGTH - property.images.length
    ).fill(true);

    const handleClick = async (image) => {
        if (
            image.startsWith('https://firebasestorage') &&
            addImageToBeDeleted
        ) {
            addImageToBeDeleted(image);
        }

        setProperty((prevProperty) => ({
            ...prevProperty,
            images: prevProperty.images.filter((img) => img !== image),
        }));
    };

    const onImageChange = async (e) => {
        [...e.target.files].forEach((file) => {
            const url = fileToUrl(file);

            if (
                property.images.length < MAX_LENGTH &&
                e.target.files.length < MAX_LENGTH
            ) {
                setProperty((prevProperty) => ({
                    ...prevProperty,
                    images: [...prevProperty.images, url],
                }));
            }
        });
    };

    return (
        <div>
            <div className=" text-center">
                <label htmlFor="images" className="font-bold text-lg">
                    Images:
                </label>
                <p>Please select at least 1 and up to 8 images</p>
                <input
                    type="file"
                    id="images"
                    max={1048576}
                    ref={inputRef}
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={onImageChange}
                />
            </div>
            <div
                className={`grid grid-cols-2 md:grid-cols-4 my-5 gap-5 justify-items-center m-auto`}
            >
                {property.images.map((img, idx) => (
                    <div className="relative" key={idx}>
                        <div
                            className="absolute z-10 top-1 right-1 bg-red-700 rounded-md p-1 inline-flex items-center justify-center text-4xl text-white hover:bg-red-600 hover:text-black"
                            onClick={() => handleClick(img)}
                        >
                            <svg
                                className="h-3 w-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                        <img
                            src={img}
                            alt="property-image"
                            className={'bg-cover w-[120px] h-[120px]'}
                        />
                    </div>
                ))}
                {imgPlaceholderArray.map((_, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-center text-4xl w-[120px] h-[120px] border select-none cursor-pointer hover:border-indigo-600"
                        onClick={() =>
                            inputRef.current && inputRef.current.click()
                        }
                    >
                        +
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageUploader;

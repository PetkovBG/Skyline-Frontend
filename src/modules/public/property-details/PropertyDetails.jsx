import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';

import Gallery from './components/Gallery';
import propertyServiceFactory from '../../../services/propertyService';
import { useAuthContext } from '../../../contexts/AuthContext';
import useLikeHandler from '../../../hooks/useLikeHandler';
import { isPropertyInFavorites } from '../../../utils/isPropertyInFavorites';
import { useUserContext } from '../../../contexts/UserContext';
import { usePropertyContext } from '../../../contexts/PropertyContext';
import { onDeleteClick } from '../../../utils/deleteProperty';
import ProfileInitials from '../../common/ProfileInitials';

const PropertyDetails = () => {
    const location = useLocation();
    const urlParts = location.pathname.split('/');
    const propertyType = urlParts[1]; //for-sale || for-rent

    const navigate = useNavigate();

    const { onLikeHandler } = useLikeHandler();
    const { userData } = useUserContext();

    const [tourType, setTourType] = useState('In Person');
    const [property, setProperty] = useState();
    const [copied, setCopied] = useState(false);

    const propertyService = propertyServiceFactory();

    const { propertyId } = useParams();
    const { userId } = useAuthContext();
    const { deleteProperty } = usePropertyContext();

    const copyURL = () => {
        setCopied(true);
        console.log('COPYURL-NEW');

        setTimeout(() => {
            setCopied(false);
        }, 2000);

        let copyText = window.location.href;
        navigator.clipboard.writeText(copyText);
    };

    useEffect(() => {
        propertyService
            .getOne(propertyId)
            .then((res) => {
                setProperty(res);
            })
            .catch((err) => {
                console.log('propertyService Error', err);
            });
    }, [propertyId]);

    const isOwner = property?.userId._id === userId;

    if (!property) {
        //TODO - improve message design if necessary
        return (
            <>
                <p>Proprety Details Loading...</p>
            </>
        );
    }

    const onBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="flex flex-col mx-[10vw] text-left text-lg font-semibold mt-[73px] gap-5">
            <div className="flex flex-col gap-5">
                <p
                    className="text-indigo-400 cursor-pointer mt-4"
                    onClick={onBackClick}
                >
                    &larr; Back
                </p>

                <h1 className="text-2xl font-bold">{property.title}</h1>
                <div className="flex justify-between">
                    <p className="text-slate-500">
                        {property.location.address}, {property.location.city}
                    </p>
                    <div className="space-x-5">
                        {isOwner && (
                            <>
                                <Link
                                    to={`/private/${propertyType}/${propertyId}/edit`}
                                    className="border dark:bg-slate-700 dark:border-slate-600 dark:text-blue-100 dark:hover:text-indigo-400 transition-all text-blue-500 bg-slate-100 hover:border-gray-300 hover:text-indigo-600 p-1.5 px-3 rounded-lg inline-block"
                                >
                                    Edit
                                </Link>
                                <button
                                    className="border text-blue-500 bg-gray-100 hover:border-gray-300 hover:text-indigo-600 p-1.5 px-3 rounded-lg"
                                    onClick={() =>
                                        onDeleteClick(property, deleteProperty)
                                    }
                                >
                                    Delete
                                </button>
                            </>
                        )}
                        <button
                            className="border  dark:bg-slate-700 dark:border-slate-600 dark:text-blue-100 dark:hover:text-indigo-400 transition-all text-indigo-600 bg-gray-100 hover:border-gray-300 p-1.5 px-3 rounded-lg"
                            onClick={copyURL}
                        >
                            {copied ? 'Link Copied' : 'Copy Link'}
                        </button>
                        <button
                            onClick={(e) => onLikeHandler(e, property._id)}
                            className="border  dark:bg-slate-700 dark:border-slate-600 dark:text-blue-100 dark:hover:text-indigo-400 transition-all text-indigo-600 bg-gray-100 hover:border-gray-300 p-1.5 px-3 rounded-lg"
                        >
                            {isPropertyInFavorites(property._id, userData)
                                ? 'Unlike'
                                : 'Like'}
                        </button>
                    </div>
                </div>
            </div>
            <Gallery images={property.images} />
            <div className="flex gap-10 w-full">
                <div className="flex flex-col gap-5 w-[75%]">
                    <div className="flex gap-10 justify-center border p-5 rounded-md transition-all bg-gray-100 dark:bg-slate-900 dark:border-slate-600 dark:text-slate-400 text-gray-600">
                        <div>
                            <h3>Bedrooms</h3>
                            <div className="flex gap-1 items-center">
                                <i className="fas fa-bed"></i>
                                <p className="text-black transition-all dark:text-white">
                                    {property.bedrooms}
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3>Bathrooms</h3>
                            <div className="flex gap-1 items-center">
                                <i className="fas fa-bath"></i>
                                <p className="text-black transition-all dark:text-white">
                                    {property.bathrooms}
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3>Square Area</h3>
                            <div className="flex gap-1 items-center">
                                <i className="fas fa-chart-area"></i>
                                <p className="text-black transition-all dark:text-white">
                                    {property.area} m&#178;
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3>Type</h3>
                            <div className="flex gap-1 items-center">
                                <i className="fas fa-home"></i>
                                <p className="text-black transition-all dark:text-white">
                                    {property.type}
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3>Status</h3>
                            <div className="flex gap-1 items-center">
                                <i className="fas fa-check-square"></i>
                                <p className="text-black transition-all dark:text-white">
                                    {property.status}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl mb-5">About this property</h2>
                        <p className="text-slate-500">{property.description}</p>
                    </div>
                    <div className="p-5 bg-gray-100 dark:bg-slate-900 rounded-md transition-[background]">
                        <h3>Listed by</h3>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-5">
                                <ProfileInitials
                                    fullName={property.userId.fullName}
                                    size={60}
                                />
                                <div>
                                    <h4>{property.userId.fullName}</h4>
                                    <p className="text-slate-500">
                                        {property.userId.email}
                                    </p>
                                </div>
                            </div>
                            <div className="space-x-5">
                                <button className="border dark:bg-slate-700 dark:border-slate-600 dark:text-blue-100 dark:hover:text-indigo-400 transition-all text-indigo-600 bg-gray-200 hover:border-gray-300 p-1.5 px-3 rounded-lg">
                                    Ask a question
                                </button>
                                <button className="border dark:bg-slate-700 dark:border-slate-600 dark:text-blue-100 dark:hover:text-indigo-400  transition-all text-indigo-600 bg-gray-200 hover:border-gray-300 p-1.5 px-3 rounded-lg">
                                    Get more info
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t pt-5 mt-5">
                        <h3>Property Features</h3>
                        <div className="grid grid-cols-2">
                            {property.features.map((feature, index) => (
                                <p key={index} className="pl-5">
                                    <i className="fas fa-dot-circle mr-6 mt-4"></i>
                                    {feature}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 border dark:border-slate-600 transition-all rounded w-[25%] h-fit p-5 text-slate-500">
                    <h3>Price</h3>
                    <p className="text-sm text-slate-500">
                        <span className="text-xl text-indigo-400 font-bold">
                            ${property.price}
                        </span>
                        {property.status === 'for rent'
                            ? ' / month'
                            : ' / total'}
                    </p>
                    <button className="text-white bg-indigo-400 hover:bg-indigo-500 transition-all w-full p-1.5 px-3 rounded-lg">
                        {property.status === 'for rent'
                            ? 'Apply now'
                            : 'Buy now'}
                    </button>
                    <h2 className="text-black text-xl border-t dark:border-t-slate-600 dark:text-white transition-all py-3 mt-3">
                        Request a tour
                    </h2>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setTourType(() => 'In Person')}
                            className={`border text-indigo-400 dark:bg-slate-900 transition-all hover:border-gray-300 p-1.5 px-3 rounded-lg w-full ${
                                tourType === 'In Person' &&
                                'bg-gray-200 border-indigo-400 hover:border-indigo-500'
                            }`}
                        >
                            In Person
                        </button>
                        <button
                            onClick={() => setTourType(() => 'Virtual')}
                            className={`border text-indigo-400 dark:border-slate-600 dark:hover:border-slate-500 transition-all hover:border-gray-300 p-1.5 px-3 rounded-lg w-full ${
                                tourType === 'Virtual' &&
                                'bg-gray-200 border-indigo-400 hover:border-indigo-600'
                            }`}
                        >
                            Virtual
                        </button>
                    </div>
                    <input
                        type="date"
                        className="border dark:border-slate-600 dark:bg-slate-800 hover:border-gray-300 dark:hover:border-slate-500 transition-all p-1.5 px-3 rounded-lg w-full"
                    />
                    <button className="text-white bg-indigo-400 hover:bg-indigo-500 w-full p-1.5 px-3 rounded-md transition-all">
                        Request {tourType} tour
                    </button>
                    <p className="text-sm text-center">
                        It is free of charge - cancel anytime.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;

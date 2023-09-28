import { Link } from 'react-router-dom';
import Tenant from './Tenant';
import { usePropertyContext } from '../../../../contexts/PropertyContext';
import { onDeleteClick } from '../../../../utils/deleteProperty';
import usePropertyStatus from '../../../../hooks/usePropertyStatus';
import { useAuthContext } from '../../../../contexts/AuthContext';

function SimpleDetails({ property, onStatusUpdate, pageIdentifier, handleLikeClick }) {
    const { userId } = useAuthContext();
    const { getProperty, onPropertyStatusUpdate } = usePropertyContext();
    const { deleteProperty } = usePropertyContext();
    const {
        propertyStatus,
        linkStatus,
        displayBtn,
        changePropertyStatus,
        markAsActivehandler,
    } = usePropertyStatus(
        property,
        onStatusUpdate,
        onPropertyStatusUpdate,
        getProperty
    );

    const location = `${property?.location?.address}, ${property?.location?.city}`;
    const listedOn = new Date(property?.listingCreation).toLocaleDateString();
    const img = property?.images[0];

    const isOwner = property?.userId._id === userId;

    if (!property) {
        const displayedMessage = pageIdentifier.arrayKey === 'properties' ? <p>There are no properties currently. Create a property now.</p> : <p>There are no properties in Favorites. Browse properties for sale/for rent</p>
        return displayedMessage;
    }

    const showDetailsOption = (pageIdentifier.arrayKey === 'favorites' && property.status !== 'sold' && property.status !== 'rented' && property.status !== 'inactive') || (isOwner && pageIdentifier.arrayKey === 'favorites');
    const showDetailsInMyProperties = pageIdentifier.arrayKey === 'properties';

    return (
        <>
            <div
                style={{ backgroundImage: `url(${img})` }}
                className={`bg-cover bg-center w-full h-[400px]`}
            ></div>
            <div className="p-5 dark:text-white">
                <div className="flex items-center justify-between">
                    <h2 className="max-w-[450px] text-3xl font-semibold truncate mr-5">{property.title}</h2>

                    <div className="flex">
                        {isOwner && (
                            <>
                                <Link
                                    to={`/private/${linkStatus}/${property._id}/edit`}
                                    className="py-2 px-4 mr-4 bg-indigo-400 text-white rounded-md transition-all hover:bg-indigo-500 active:scale-95"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() =>
                                        onDeleteClick(
                                            property,
                                            deleteProperty,
                                            true
                                        )
                                    }
                                    className="py-2 px-4 mr-4 bg-indigo-400 text-white rounded-md transition-all hover:bg-indigo-500 active:scale-95"
                                >
                                    Delete
                                </button>
                                {displayBtn && (
                                    <button
                                        onClick={(e) =>
                                            changePropertyStatus(e, property)
                                        }
                                        className="py-2 px-4 mr-4 bg-indigo-400 text-white rounded-md transition-all hover:bg-indigo-500 active:scale-95"
                                    >
                                        {propertyStatus}
                                    </button>
                                )}
                                {displayBtn && (
                                    <button
                                        onClick={(e) =>
                                            changePropertyStatus(e, property)
                                        }
                                        className="py-2 px-4 mr-4 bg-indigo-400 text-white rounded-md transition-all hover:bg-indigo-500 active:scale-95"
                                    >
                                        Mark as Inactive
                                    </button>
                                )}
                                {!displayBtn && (
                                    <>
                                        <button
                                            onClick={() =>
                                                markAsActivehandler(
                                                    property,
                                                    'for-rent',
                                                    'Mark as Rented'
                                                )
                                            }
                                            className="py-2 px-4 mr-4 bg-indigo-400 text-white rounded-md transition-all hover:bg-indigo-500 active:scale-95"
                                        >
                                            Mark for Rent
                                        </button>
                                        <button
                                            onClick={() =>
                                                markAsActivehandler(
                                                    property,
                                                    'for-sale',
                                                    'Mark as Sold'
                                                )
                                            }
                                            className="py-2 px-4 mr-4 bg-indigo-400 text-white rounded-md transition-all hover:bg-indigo-500 active:scale-95"
                                        >
                                            Mark for Sale
                                        </button>
                                    </>
                                )}
                            </>
                        )}
                        {!isOwner && <button onClick={(e) => handleLikeClick(e, property)}
                            className="py-2 px-4 mr-4 bg-indigo-400 text-white rounded-md transition-all hover:bg-indigo-500 active:scale-95"
                        >
                            Unlike
                        </button>}
                        {/* {isOwner && pageIdentifier.arrayKey === 'properties' && <Link
                            to={`/${linkStatus}/${property._id}`}
                            className="py-2 px-4 bg-indigo-400 text-white rounded-md transition-all hover:bg-indigo-500 active:scale-95"
                        >
                            See more &rarr;
                        </Link>} */}
                        {(showDetailsOption || showDetailsInMyProperties) && <Link
                            to={`/${linkStatus}/${property._id}`}
                            className="py-2 px-4 bg-indigo-400 text-white rounded-md transition-all hover:bg-indigo-500 active:scale-95"
                        >
                            See more &rarr;
                        </Link>}

                    </div>
                </div>
                <p className="text-slate-500">{location}</p>
                <div className="flex justify-evenly border-2 dark:border-slate-600 mt-5 rounded-md">
                    <div className="p-4">
                        <p className="capitalize text-slate-500 font-semibold">
                            Price
                        </p>
                        <p className="font-bold">
                            <i className="fas fa-dollar-sign text-indigo-400"></i>{' '}
                            {property.price}
                        </p>
                    </div>
                    <div className="p-4">
                        <p className="capitalize text-slate-500 font-semibold">
                            Bedrooms
                        </p>
                        <p className="font-bold">
                            <i className="fas fa-bed text-indigo-400"></i>{' '}
                            {property.bedrooms}
                        </p>
                    </div>
                    <div className="p-4">
                        <p className="capitalize text-slate-500 font-semibold">
                            Bathrooms
                        </p>
                        <p className="font-bold">
                            <i className="fas fa-bath text-indigo-400"></i>{' '}
                            {property.bathrooms}
                        </p>
                    </div>
                    <div className="p-4">
                        <p className="capitalize text-slate-500 font-semibold">
                            Area
                        </p>
                        <p className="font-bold">
                            <i className="fas fa-ruler-combined pr-2 text-indigo-400"></i>{' '}
                            {property.area} sq m
                        </p>
                    </div>
                    <div className="p-4">
                        <p className="capitalize text-slate-500 font-semibold">
                            Listed on
                        </p>
                        <p className="font-bold">
                            <i className="fas fa-calendar-alt text-indigo-400"></i>{' '}
                            {listedOn}
                        </p>
                    </div>
                </div>
                <div className="flex mt-5">
                    <div className="flex-1 mr-5">
                        <p className="font-semibold text-2xl mb-3">
                            Description
                        </p>
                        <p className="text-slate-500 leading-relaxed">
                            {property.description}
                        </p>
                        <p className="font-semibold text-2xl mb-3 mt-4">
                            Features
                        </p>
                        {property.features.map((feature, i) => (
                            <span
                                key={i}
                                className="p-2 rounded-md mr-2 mb-2 font-semibold inline-block bg-indigo-50 text-indigo-400"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                    <div className="flex-shrink-0 basis-72">
                        <Tenant />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SimpleDetails;

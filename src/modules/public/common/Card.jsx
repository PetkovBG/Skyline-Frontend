import { useNavigate } from 'react-router-dom';
const Card = ({ property, onLikeHandler, specialClass }) => {
    const navigate = useNavigate();

    const detailsNavigate = (property) => {
        navigate(`/${property.status}/${property._id}`);
    };

    return (
        <div
            className="max-w-sm shadow-lg rounded-lg dark:bg-slate-900 transition-[background-color] bg-white cursor-pointer"
            onClick={() => detailsNavigate(property)}
        >
            <div className="">
                <img
                    className="w-full rounded-t-lg h-[215px] shadow-lg"
                    src={property.images[0]}
                    alt="house"
                />

                <div className="px-5 py-4 h-48 text-left pt-8 overflow-hidden">
                    <div className="flex justify-between">
                        <div className="w-[80%] overflow-hidden">
                            <div className="font-bold text-indigo-400 text-xl mb-2">
                                ${property.price}
                                <span className="text-gray-500 text-sm font-normal">
                                    {property.forRent ? '/month' : null}
                                </span>
                            </div>

                            <div className="font-bold text-black-500 text-xl mb-2">
                                {property.title}
                            </div>

                            <p className="text-gray-500 text-lg font-light">
                                {property.description}
                            </p>
                        </div>

                        <button
                            onClick={(e) => onLikeHandler(e, property._id)}
                            className={`${
                                specialClass
                                    ? 'bg-indigo-500 hover:bg-indigo-400'
                                    : 'dark:hover:bg-slate-600 hover:bg-indigo-200'
                            } h-[36px] w-[36px] rounded-full text-2xl font-bold border-2 group relative`}
                        >
                            <i
                                className={`${
                                    specialClass
                                        ? 'text-white '
                                        : 'text-indigo-500 '
                                } h-[21px] w-[21px] far fa-heart fa-sm inset-0`}
                            ></i>
                        </button>
                    </div>
                </div>

                <div className="h-[60px]">
                    <hr className="border-2 border-gray-100 mb-2" />

                    <div className="pb-4 pt-2 ">
                        <span className="inline-block bg-gray-200 dark:bg-slate-700 dark:text-white transition-all rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            <i className="fas fa-toilet pr-2 text-indigo-400"></i>
                            {property.bedrooms} Beds
                        </span>
                        <span className="inline-block bg-gray-200 dark:bg-slate-700 dark:text-white transition-all rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            <i className="fas fa-bath pr-2 text-indigo-400"></i>
                            {property.bathrooms} Bathrooms
                        </span>
                        <span className="inline-block bg-gray-200 dark:bg-slate-700 dark:text-white transition-all rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            <i className="fas fa-ruler-combined pr-2 text-indigo-400"></i>
                            {property.area} m2
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

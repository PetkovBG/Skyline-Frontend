import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../../assets/house-hero.jpg';

const HeroComponent = () => {
    const [searchType, setSearchType] = useState('for-sale');

    const handleSearchTypeChange = (type) => {
        setSearchType(type);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const location = e.target[0].value;
        if (searchType === 'for-sale') {
            window.location.href = `/for-sale?city=${location}`;
        } else {
            window.location.href = `/for-rent?city=${location}`;
        }
    };

    return (
        <div className="relative z-0 mb-[60px] max-h-[80vh] font-bold">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <img
                src={heroImg}
                alt="hero"
                className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                    Find Your Dream Home
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-center max-w-[80%]">
                    Discover the perfect properties for{' '}
                    {searchType === 'for-sale' ? 'buying' : 'renting'} in your
                    desired location.
                </p>
                <div className="bg-white dark:bg-slate-800 dark:text-indigo-200 transition-all text-indigo-950 mt-10 p-8 rounded-md max-w-[90vw] md:max-w-[45vw]">
                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <button
                                className={`mr-2 uppercase underline-offset-4 hover:underline hover:decoration-indigo-400 ${
                                    searchType === 'for-sale'
                                        ? 'underline decoration-indigo-500 hover:decoration-indigo-400'
                                        : 'no-underline'
                                }`}
                                onClick={() =>
                                    handleSearchTypeChange('for-sale')
                                }
                            >
                                Buy
                            </button>
                            <button
                                className={`ml-2 mr-2 uppercase underline-offset-4 hover:underline hover:decoration-indigo-400 ${
                                    searchType === 'for-rent'
                                        ? 'underline decoration-indigo-500 hover:decoration-indigo-400'
                                        : 'no-underline'
                                }`}
                                onClick={() =>
                                    handleSearchTypeChange('for-rent')
                                }
                            >
                                Rent
                            </button>
                            <Link
                                to={'/private/create'}
                                className={
                                    'ml-2 uppercase underline-offset-4 hover:underline hover:decoration-indigo-400 '
                                }
                                onClick={(a) => a}
                            >
                                Add
                            </Link>
                        </div>
                    </div>
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            id="searchBar"
                            className="w-full px-4 py-2 mb-4 transition-all dark:bg-slate-800 dark:text-white rounded-md outline outline-2 outline-indigo-400 focus:outline-indigo-500"
                            placeholder="Search by location..."
                        />
                        <button
                            type="submit"
                            className="w-full py-2 bg-indigo-400 text-white rounded-md hover:bg-indigo-500"
                        >
                            Browse Properties
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;

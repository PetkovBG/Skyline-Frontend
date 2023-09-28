import { useState } from 'react';
import RadioButtons from './Radio-buttons';
import { Link } from 'react-router-dom';

function WeMakeItEasySection() {
    const [option, setOption] = useState('tenants');

    return (
        <div className="container mx-auto dark:text-white flex items-center justify-between">
            <div className="basis-[45%]">
                <img
                    src="https://c0.wallpaperflare.com/preview/817/828/930/architecture-beautiful-exterior-family-house.jpg"
                    alt="house-1"
                    className="rounded-md"
                />
                <div className="flex justify-around border transition-all dark:bg-slate-800 dark:border-slate-500 rounded-md border-indigo-100 w-[60%] mx-auto translate-y-[-50%] p-3 bg-white shadow-lg text-left">
                    <div>
                        <p className="font-bold text-indigo-900 dark:text-indigo-200 transition-all">
                            Find the best deal
                        </p>
                        <p className="text-slate-500">
                            Browse thousands of properties
                        </p>
                    </div>
                    <div className="relative bottom-10 flex items-center justify-center transition-all border border-white dark:border-slate-800 w-14 h-14 rounded-full bg-indigo-400">
                        <i className="fas fa-home text-2xl text-white dark:text-slate-800 transition-all"></i>
                    </div>
                </div>
            </div>
            <div className="text-left w-[42%]">
                <RadioButtons option={option} setOption={setOption} />
                <h2 className="text-5xl font-bold">
                    We make it easy for tennants and landlords.
                </h2>
                <p className="text-slate-500 my-6 text-xl">
                    {option === 'tenants'
                        ? 'Are you in search of your dream rental property? Skyline Estate is here to help you find the ideal home that suits your lifestyle and preferences. Our extensive listing of rental properties offers a wide range of options, from cozy apartments to spacious family homes.'
                        : 'Are you a property owner looking to maximize the potential of your investment? Skyline Estate is your trusted partner for property management and tenant placement. Discover the convenience of stress-free property ownership and let us handle all the details, so you can enjoy the benefits of your investment worry-free. '}
                </p>
                <Link
                    to={option === 'tenants' ? '/for-rent' : '/private/create'}
                    className="transition-all inline-block py-2 px-4 rounded-md bg-indigo-400 hover:bg-indigo-500 active:scale-95 text-white"
                >
                    See more &rarr;
                </Link>
            </div>
        </div>
    );
}

export default WeMakeItEasySection;

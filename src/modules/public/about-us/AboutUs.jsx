import marto from '../assets/marto.jpg';
import joro from '../assets/joro.jpg';
import orlin from '../assets/orlin.jpg';
import zlati from '../assets/zlati.jpg';
import tisho from '../assets/tisho.jpg';
import realEstateHouse from '../assets/real-estate-house.png';
import { Link } from 'react-router-dom';

const developers = [
    { name: 'Martin Donchev', img: marto },
    { name: 'Georgi Kirov', img: joro },
    { name: 'Orlin Petkov', img: orlin },
    { name: 'Tihomir Doktorov', img: tisho },
    { name: 'Zlatomir Radev', img: zlati },
];

const AboutUs = () => {
    return (
        <div className="pt-[20px]">
            <div className="bg-gray-100 w-[85%] dark:bg-slate-900 m-auto transition-[background] pt-10 rounded-lg mt-[73px] shadow-2xl overflow-hidden">
                <p className="font-light text-2xl pb-3">
                    About
                    <span className="bg-indigo-500 ml-3 rounded-full shadow-2xl p-1 text-white">
                        Us
                    </span>
                </p>
                <hr className="border-2 border-blue-100 w-48 mx-auto mb-8" />

                <div className="flex px-8 gap-5">
                    <div className="w-[60%] text-left">
                        <h1 className="text-3xl font-bold text-center">
                            Welcome to Skyline
                            <span className="text-indigo-400"> Estate</span>!
                        </h1>
                        <h2 className="pl-2 text-2xl font-medium mt-16">
                            Your Trusted Real Estate Partner
                        </h2>
                        <p className="text-2xl text-slate-500 h-38 font-light pt-10 w-[90%]">
                            At Skyline Estate, we are dedicated to making your
                            real estate dreams come true. Whether you're buying,
                            selling, or investing, our experienced team is here
                            to guide you every step of the way. Trust,
                            expertise, and personalized service - that's what
                            sets us apart. Let's get started today!
                        </p>

                        <Link
                            to={'/register'}
                            className="relative right-28 bg-indigo-400 hover:bg-indigo-500 transition-all text-white font-bold px-6 py-2 rounded-md mt-10 float-right"
                        >
                            Get Started{' '}
                            <i className="fas fa-sm fa-arrow-right"></i>
                        </Link>
                    </div>

                    <div className="basis-[50%]">
                        <img
                            src={realEstateHouse}
                            className="rounded-md"
                            alt="h-house-img"
                        />
                    </div>
                </div>

                <div className="space-x-[25px] pt-8 text-center mb-[100px]">
                    <span className="relative left-3 text-2xl text-gray-400 font-extralight">
                        Developers
                    </span>

                    <div className="flex gap-10 justify-center pt-8">
                        {developers.map((dev, index) => {
                            return (
                                <div className="group relative" key={index}>
                                    <img
                                        className="rounded-full w-[60px] h-[60px] transition-all hover:cursor-pointer hover:border-indigo-400 dark:hover:border-indigo-400 p-[2px] border-solid border-2 dark:border-slate-700"
                                        src={dev.img}
                                        alt="Profile Picture"
                                    />
                                    <span className="bg-indigo-400 px-2 py-1 min-w-max rounded-md text-sm text-white absolute z-10 -bottom-9 left-[50%] translate-x-[-50%] scale-0 group-hover:scale-100 transition-all duration-100 origin-top">
                                        {dev.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                    <hr className="border-2 border-blue-200 w-48 mx-auto" />
                    <hr className="relative right-6 border-2 border-blue-200 w-48 float-right" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

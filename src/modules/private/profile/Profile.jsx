import { useUserContext } from '../../../contexts/UserContext';
import ProfileInitials from '../../common/ProfileInitials';

function Profile() {
    const { userData } = useUserContext();

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const allMonths = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const currentWeek = [];
    for (let i = 4; i > -3; i--) {
        currentWeek.push(
            <div
                key={i}
                className="bg-indigo-200 h-[50px] w-[50px] rounded hover:border-2 hover:border-indigo-400 hover:cursor-pointer hover:text-indigo-600 flex justify-center place-items-center"
            >
                <p className="font-bold">{currentDay - i}</p>
            </div>
        );
    }

    if (!userData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="h-screen" name="main">
            <div className="flex h-full">
                <div className=" w-2/3 flex grid grid-cols-8 grid-rows-8 gap-4 mx-10 my-5">
                    <div className="bg-indigo-100 col-span-8 row-span-1 rounded-md flex justify-between place-items-center border-2 border-gray-200">
                        <div className="ml-10 my-10">
                            <p className="font-bold">
                                Review Tenant Application
                            </p>
                            <p>
                                Let's review your tenancy application and get
                                tips from us.
                            </p>
                        </div>
                        <button className="text-indigo-500 mr-10 bg-white px-[20px] py-[5px] rounded-md font-bold">
                            Review my application
                        </button>
                    </div>
                    <div className="rounded-md col-span-5 row-span-2 flex flex-col justify-evenly border-2 border-gray-200">
                        <div className="ml-10 flex">
                            <p className="font-bold inline mr-5">
                                Schedule Payment
                            </p>
                            <span className="bg-orange-100 text-orange-300 font-bold text-[13px] rounded-lg px-3 py-[2px]">
                                DUE IN 7 DAYS
                            </span>
                        </div>
                        <div className="flex">
                            <div className="pr-10">
                                <ul className="flex inline ml-[60px] list-disc text-purple-400">
                                    <li>
                                        <div className="text-gray-500">
                                            Total
                                        </div>
                                        <div className="text-black font-bold">
                                            $1500
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="border-l-2 border-gray-200 pr-10">
                                <ul className="flex inline ml-10 list-disc text-green-400">
                                    <li>
                                        <div className="text-gray-500">
                                            Paid
                                        </div>
                                        <div className="text-black font-bold">
                                            $700
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="border-l-2 border-gray-200">
                                <ul className="flex inline ml-10 list-disc text-red-400">
                                    <li>
                                        <div className="text-gray-500">
                                            Remaining
                                        </div>
                                        <div className="text-black font-bold">
                                            $800
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <button className="bg-indigo-500 rounded-md px-[30px] ml-10 text-white font-bold">
                                Schedule Payment
                            </button>
                        </div>
                    </div>
                    <div className="border-2 border-gray-200 rounded-md col-span-3 row-span-6 flex flex-col justify-evenly">
                        <div className="flex justify-between">
                            <p className="font-bold m-7 text-[20px]">
                                My Profile
                            </p>
                            <button className="text-[40px] text-gray-400 mr-5 w-[50px] h-[0px]">
                                ...
                            </button>
                        </div>
                        <div className="flex place-items-center flex-col">
                            <ProfileInitials
                                fullName={userData.fullName}
                                size={80}
                            />
                            <p className="font-bold">{userData.fullName}</p>
                            <p className="text-gray-500">{userData.email}</p>
                        </div>
                        <div className="flex justify-center mt-5 border-b-2 pb-3 mx-5">
                            <div className="bg-indigo-200 h-[30px] rounded flex inline justify-center px-5 place-items-center mb-5">
                                <span className="font-bold">123456</span>
                                <div className="outline-none bg-indigo-200 rounded w-[50px] pl-[10px] m-[5px] font-bold">
                                    ****
                                </div>
                                <button className="font-bold text-indigo-500">
                                    Show SSN
                                </button>
                            </div>
                        </div>
                        <div className="mx-5 py-5 border-b-2 flex justify-between">
                            <p className="text-gray-500">Credit Score</p>
                            <div className="flex">
                                <div className="bg-green-600 w-[20px] h-[10px] mt-2 mr-1 rounded"></div>
                                <div className="text-green-600 font-bold">
                                    750 (Good)
                                </div>
                            </div>
                        </div>
                        <div className="h-[40%] w-[90%] bg-blue-950 rounded-lg mx-5 my-10 flex flex-col justify-evenly place-items-center">
                            <p className="text-white text-[25px]">
                                Rent Application Chance
                            </p>
                            <div className="bg-white w-[300px] h-[20px] ">
                                <div className="bg-indigo-500 w-[70%] h-[20px]"></div>
                            </div>
                            <p className="text-white font bold text-[50px]">
                                70%
                            </p>
                            <div className="text-white flex flex-col place-items-center">
                                <p>Chance of your tenancy</p>
                                <p>application to get approved.</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 rounded-md col-span-5 row-span-4 border-gray-200">
                        <div className="border-b-2 border-gray-200 p-5">
                            <p className="font-bold">Properties</p>
                            <p className="text-gray-500">
                                From the most recent properties you see.
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className=" w-1/3 border-l-2 border-gray-200 mb-5 border-b-2 rounded">
                    <div className="border-b-2 border-gray-200 pb-7">
                        <div className="flex justify-between m-5 mx-10">
                            <p className="font-bold text-[20px]">
                                {allMonths[currentMonth]} {currentYear}
                            </p>
                            <p className="font-bold text-[20px]"></p>
                            <div className="">
                                <button className="text-gray-400 hover:text-black">
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <button className="ml-7 text-gray-400 hover:text-black">
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-evenly">{currentWeek}</div>
                    </div>
                    <div className="mx-10 m-5">
                        <p className="font-bold text-[20px]">
                            Recent Activities
                        </p>
                        <div className="h-[400px]"></div>
                        <div className="border-2 border-gray-200 pl-5 mt-10 ml-[70px] h-[200px] rounded-lg bg-indigo-100 flex flex-col place-items-start">
                            <p className="text-indigo-500 font-bold pt-5">
                                <i className="far fa-lightbulb mr-[5px]"></i>
                                <span>Get Tips</span>
                            </p>
                            <p className="mt-3">
                                How to make your tenancy application
                            </p>
                            <p>to get approved.</p>
                            <button className=" bg-indigo-500 rounded px-5 py-2 text-white font-bold mt-8">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

import joro from '../../../public/assets/joro.jpg';

function Tenant() {
    return (
        <div className="bg-indigo-900 rounded-md font-semibold">
            <div className="flex p-5 border-b border-gray-500">
                <img src={joro} alt="joro" className="rounded-full" />
                <div className="ml-5">
                    <p className="capitalize text-lg text-white">
                        Georgi Kirov
                    </p>
                    <p className="text-gray-400">Tenant</p>
                </div>
            </div>
            <div className="p-5">
                <div className="flex justify-between mb-5">
                    <p className="text-gray-400">Move-in Date</p>
                    <p className="text-white">Dec 1, 2021</p>
                </div>
                <div className="flex justify-between mb-5">
                    <p className="text-gray-400">Contact</p>
                    <p className="text-white">(+1)324-5329</p>
                </div>
                <div className="flex justify-between mb-5">
                    <p className="text-gray-400">Price per month</p>
                    <p className="text-white">$1,900</p>
                </div>
                <button className="bg-indigo-400 hover:bg-indigo-500 active:scale-95 transition-all text-white py-2 w-full rounded-md">
                    Send message
                </button>
            </div>
        </div>
    );
}

export default Tenant;

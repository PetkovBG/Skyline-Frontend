import { Link } from 'react-router-dom';
import errorPage from '../assets/Error.jpg';

function Error() {
    return (
        <div className="h-screen bg-indigo-400 flex items-center justify-center">
            <div className="w-4/5 h-[70vh] bg-white rounded-md flex justify-around items-center shadow-2xl">
                <div className="">
                    <h1 className="font-bold text-5xl">Oops....</h1>
                    <h2 className="text-3xl my-4">Page not found</h2>
                    <p className="max-w-sm text-lg text-slate-500 font-semibold">
                        This Page doesn't exist or was removed! We suggest you
                        back to home.
                    </p>
                    <Link
                        to="/"
                        className="inline-block mt-14 uppercase text-white py-2 px-6 text-center transition-all bg-indigo-400 hover:bg-indigo-500 active:scale-95 rounded-md"
                    >
                        &larr; back to home
                    </Link>
                </div>
                <img
                    src={errorPage}
                    className="w-[45%]"
                    alt="page-not-found-img"
                />
            </div>
        </div>
    );
}

export default Error;

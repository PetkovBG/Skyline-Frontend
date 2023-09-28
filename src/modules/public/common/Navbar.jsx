import { Link } from 'react-router-dom';
import data from '../../../utils/data.json';
import { useAuthContext } from '../../../contexts/AuthContext';
import useTheme from '../../../hooks/useTheme';

const Navbar = () => {
    const { isAuthenticated, onLogout } = useAuthContext();
    const { handleThemeChange, icon } = useTheme();

    return (
        <header className="fixed top-0 left-0 z-10 bg-white dark:bg-slate-800 w-full transition-all lg:flex justify-between items-center p-4 px-6 text-lg dark:text-white font-semibold shadow">
            <Link to={'/'} className="text-2xl font-bold">
                Skyline <span className="text-indigo-400">Estate</span>
            </Link>
            <ul className="space-x-5">
                {data.navLinks.map((link, index) => (
                    <Link
                        to={link.url}
                        key={index}
                        className="hover:text-indigo-400 "
                    >
                        {link.title}
                    </Link>
                ))}
            </ul>
            <div className="flex items-center space-x-4">
                <button
                    onClick={handleThemeChange}
                    className="hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-all rounded-full w-[40px] h-[40px]"
                >
                    {icon}
                </button>
                {!isAuthenticated && (
                    <>
                        <Link
                            to={'/login'}
                            className="border dark:border-slate-600 transition-all text-indigo-400 hover:border-gray-300 p-1.5 px-3 rounded-lg inline-block"
                        >
                            Login
                        </Link>
                        <Link
                            to={'/register'}
                            className="text-white bg-indigo-400 hover:bg-indigo-500  transition-all p-1.5 px-3 rounded-lg inline-block"
                        >
                            Sign up
                        </Link>
                    </>
                )}
                {isAuthenticated && (
                    <>
                        <Link
                            to={'/private/profile'}
                            className="border dark:border-slate-600 dark:hover:border-slate-500 transition-all text-indigo-400 hover:border-gray-300 p-1.5 px-3 rounded-md"
                        >
                            Profile
                        </Link>
                        <button
                            className=" text-white bg-indigo-400 transition-all hover:bg-indigo-500 hover:border-gray-300 p-1.5 px-3 rounded-md"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Navbar;

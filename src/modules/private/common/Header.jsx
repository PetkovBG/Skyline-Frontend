import { Link } from 'react-router-dom';
import useTheme from '../../../hooks/useTheme';

function Header({ heading }) {
    const { handleThemeChange, icon } = useTheme();
    return (
        <header className="ml-14 p-4 dark:bg-slate-800 dark:text-white dark:border-b-slate-600 border-b flex items-center justify-between">
            <h1 className="text-2xl capitalize font-bold mr-auto">{heading}</h1>
            <button
                onClick={handleThemeChange}
                className="hover:bg-slate-200 mr-2 dark:hover:bg-slate-700 active:scale-95 transition-[transform] rounded-full w-[40px] h-[40px]"
            >
                {icon}
            </button>
            <Link to={'/'} className="text-2xl font-bold">
                Skyline <span className="text-indigo-400">Estate</span>
            </Link>
        </header>
    );
}

export default Header;

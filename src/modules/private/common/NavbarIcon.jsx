import { Link } from 'react-router-dom';

function NavbarIcon({ icon, text, path }) {
    return (
        <Link
            to={path}
            className="w-12 h-12 relative flex items-center justify-center rounded-md text-slate-400 dark:hover:bg-slate-600 dark:hover:text-indigo-400 hover:bg-slate-200 hover:text-indigo-500 cursor-pointer transition-all active:scale-95 group"
        >
            {icon}
            <span className="bg-gray-950 px-2 py-1 min-w-max rounded-md text-sm text-white absolute left-14 scale-0 group-hover:scale-100 transition-all duration-100 origin-left">
                {text}
            </span>
        </Link>
    );
}
export default NavbarIcon;

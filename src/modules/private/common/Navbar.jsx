import { useAuthContext } from '../../../contexts/AuthContext';
import NavbarIcon from './NavbarIcon';

function Navbar() {
    const homeIcon = <i className="fas fa-globe-europe text-3xl"></i>;
    const propertiesIcon = <i className="fas fa-home text-3xl"></i>;
    const profileIcon = <i className="fas fa-user text-3xl"></i>;
    const signOutIcon = <i className="fas fa-sign-out-alt text-3xl"></i>;
    const messagesIcon = <i className="fas fa-envelope text-3xl"></i>;
    const heartIcon = <i className="fas fa-heart text-3xl"></i>;
    const createIcon = <i className="fas fa-pen text-3xl"></i>;

    const { onLogout } = useAuthContext();

    return (
        <nav className="w-14 bg-gray-100 dark:bg-slate-700 dark:border-r-slate-600 flex flex-col border-r justify-center items-center fixed top-0 space-y-3 bottom-0 z-30">
            <NavbarIcon icon={homeIcon} text={'Home'} path={'/'} />
            <NavbarIcon
                icon={profileIcon}
                text={'Profile'}
                path={`/private/profile`}
            />
            <NavbarIcon
                icon={createIcon}
                text={'Create'}
                path={'/private/create'}
            />
            <NavbarIcon
                icon={propertiesIcon}
                text={'Properties'}
                path={'/private/my-properties'}
            />
            <NavbarIcon
                icon={heartIcon}
                text={'Favorites'}
                path={'/private/favorites'}
            />
            <NavbarIcon icon={messagesIcon} text={'Messages'} />
            <button
                onClick={onLogout}
                className="w-12 h-12 relative flex items-center justify-center rounded-md text-slate-400 hover:bg-slate-200 hover:text-red-500  dark:hover:bg-slate-600 dark:hover:text-red-400 cursor-pointer transition-all active:scale-95 group"
            >
                {signOutIcon}
                <span className="bg-gray-950 px-2 py-1 min-w-max rounded-md text-sm text-white absolute left-14 scale-0 group-hover:scale-100 transition-all duration-100 origin-left">
                    Sign out
                </span>
            </button>
        </nav>
    );
}

export default Navbar;

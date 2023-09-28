import { Outlet } from 'react-router-dom';
import useScrollToTop from '../hooks/useScrollToTop';
import Header from '../modules/private/common/Header';
import Navbar from '../modules/private/common/Navbar';

const PrivateLayout = ({ heading }) => {
    useScrollToTop();
    return (
        <>
            <Navbar />
            <Header heading={heading} />
            <main className="ml-14 dark:bg-slate-800">
                <Outlet />
            </main>
        </>
    );
};

export default PrivateLayout;

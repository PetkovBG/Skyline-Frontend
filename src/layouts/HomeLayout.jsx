import { Outlet } from 'react-router-dom';
import Navbar from '../modules/public/common/Navbar';
import Footer from '../modules/public/common/Footer';
import useScrollToTop from '../hooks/useScrollToTop';

const HomeLayout = () => {
    useScrollToTop();
    return (
        <div className="text-center">
            <Navbar />
            <main className="mt-[60px] dark:bg-slate-800 dark:text-white transition-all">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default HomeLayout;

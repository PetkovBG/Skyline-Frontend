import { useEffect, useState } from 'react';

function Pagination({ totalCards, currentPage, setCurrentPage }) {
    const totalPages = [...Array(Math.ceil(totalCards / 9) + 1).keys()].slice(
        1
    );
    const [pages, setPages] = useState([]);

    const firstPage = totalPages[0];
    const lastPage = totalPages[totalPages.length - 1];

    const currentVisiableFirstPage = pages[0];
    const currentVisiableLastPage = pages[pages.length - 1];

    const incresePageNumber = () => {
        setCurrentPage(currentPage + 1);
    };

    const decresePageNumber = () => {
        setCurrentPage(currentPage - 1);
    };

    useEffect(() => {
        setPages(totalPages.slice(0, 5));
    }, [totalCards]);

    useEffect(() => {
        if (
            currentPage > currentVisiableLastPage &&
            currentVisiableLastPage !== lastPage
        ) {
            const index = totalPages.indexOf(currentPage);
            const nextPages = totalPages.slice(index, index + 5);
            setPages(nextPages);
        } else if (
            currentPage < currentVisiableFirstPage &&
            currentVisiableFirstPage !== firstPage
        ) {
            const prevPages = totalPages.slice(currentPage - 5, currentPage);
            setPages(prevPages);
        }
    }, [currentPage]);

    return (
        <div className="mx-auto max-w-sm  mb-14 flex justify-center space-x-4 items-center">
            <button
                onClick={decresePageNumber}
                disabled={currentPage === firstPage}
                className="w-8 h-8 transition-all text-indigo-900 dark:text-indigo-200 dark:hover:bg-slate-600 active:scale-90 hover:bg-slate-300 rounded-full flex items-center justify-center"
            >
                <i className="fas fa-chevron-left"></i>
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    className={`w-10 h-10 transition-all font-semibold shadow-lg rounded-full flex justify-center items-center ${
                        page === currentPage
                            ? 'bg-indigo-900 dark:bg-indigo-300 dark:text-black text-white'
                            : 'bg-white dark:bg-slate-800 text-slate-500'
                    } hover:text-white hover:bg-indigo-900 dark:hover:bg-indigo-300`}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={incresePageNumber}
                disabled={currentPage === lastPage}
                className="w-8 h-8 transition-all text-indigo-900  dark:text-indigo-200 dark:hover:bg-slate-600 active:scale-90 hover:bg-slate-300 rounded-full flex items-center justify-center"
            >
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
}

export default Pagination;

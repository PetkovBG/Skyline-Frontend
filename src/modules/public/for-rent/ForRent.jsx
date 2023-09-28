import { useSearchParams } from 'react-router-dom';
import { usePropertyContext } from '../../../contexts/PropertyContext';
import { useEffect } from 'react';
import Catalog from '../common/Catalog';
import Pagination from '../common/Pagination';
import SearchBar from '../common/SearchBar';

function ForRent() {
    const { properties, getAllPropertiesForRent, totalCount } =
        usePropertyContext();
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.toString();
    const currentPage = Number(searchParams.get('page')) || 1;

    const setCurrentPage = (data) => {
        setSearchParams((prev) => {
            prev.set('page', data.toString());
            return prev;
        });
    };

    useEffect(() => {
        getAllPropertiesForRent(query);
    }, [query]);

    return (
        <div className="bg-indigo-50 border-b dark:border-b-slate-600 dark:bg-slate-700 transition-[background]">
            <div className="container mx-auto">
                <h1 className="text-5xl capitalize text-left pt-12 mb-10 font-bold text-black dark:text-white">
                    Search Properties To Rent
                </h1>
                <SearchBar onSearchHandler={setSearchParams} />
                <Catalog properties={properties} />
            </div>
            {properties.length > 0 && (
                <Pagination
                    totalCards={totalCount}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </div>
    );
}

export default ForRent;

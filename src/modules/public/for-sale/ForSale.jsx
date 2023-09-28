import { useSearchParams } from 'react-router-dom';
import Catalog from '../common/Catalog';
import Pagination from '../common/Pagination';
import SearchBar from '../common/SearchBar';
import { useEffect } from 'react';
import { usePropertyContext } from '../../../contexts/PropertyContext';

function ForSale() {
    const { properties, getAllPropertiesForSale, totalCount } =
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
        getAllPropertiesForSale(query);
    }, [query]);

    return (
        <div className="bg-indigo-50 border-b dark:border-b-slate-600 dark:bg-slate-700 transition-[background]">
            <div className="container mx-auto">
                <h1 className="text-5xl capitalize text-left pt-12 mb-10 font-bold text-black dark:text-white">
                    Search Properties To Buy
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

export default ForSale;

import useLikeHandler from '../../../hooks/useLikeHandler';
import { useMyProperties } from '../../../hooks/useMyProperties';
import SimpleCard from './components/SimpleCard';
import SimpleDetails from './components/SimpleDetails';
import { useEffect, useState } from 'react';

function MyProperties(arrayKey) {

    const [searchParameter, setSearchParameter] = useState('');

    useEffect(() => {
        setSearchParameter('');
    }, [arrayKey])

    const { onLikeHandler } = useLikeHandler();
    const {
        handleOnClick,
        onSearchHandler,
        filteredProperties,
        selectedProperty,
        setFilteredProperties,
    } = useMyProperties(arrayKey);

    const onStatusUpdate = (updatedProperty) => {
        setFilteredProperties((state) =>
            state.map((x) =>
                x._id === updatedProperty._id ? updatedProperty : x
            )
        );
    };

    const handleLikeClick = (e, property) => {
        setFilteredProperties((state) => state.filter((x) => x._id !== property._id));
        onLikeHandler(e, property._id);
    }

    

    return (
        <div className="flex">
            <div className="basis-[40%] border-r dark:border-r-slate-600 dark:text-white min-h-screen">
                <div className="px-4 pt-4 pb-10 border-b dark:border-b-slate-600">
                    <h2 className="text-lg font-bold">
                        Propeties{' '}
                        <span className="text-white text-base font-normal bg-indigo-400 py-1 px-2 rounded-md">
                            {filteredProperties.length}
                        </span>
                    </h2>
                    {/* search-bar */}
                    <div className="mt-4 flex relative items-center">
                        <i className="fas fa-search absolute left-2 text-indigo-400"></i>

                        <input
                            // onChange={onSearchHandler}
                            onChange={(e) => {
                              onSearchHandler(e)
                              setSearchParameter(e.target.value)  
                            }}
                            value={searchParameter}
                            type="text"
                            placeholder="Search by location..."
                            className="w-full pl-8 pr-2 py-2 bg-indigo-50 dark:bg-slate-700 dark:border-slate-600 border outline-none rounded-md"
                        />
                    </div>
                </div>
                {/* single property card */}
                {filteredProperties.map((property) => (
                    <SimpleCard
                        property={property}
                        selectedProperty={selectedProperty}
                        key={property._id}
                        handleOnClick={handleOnClick}
                    />
                ))}
            </div>
            <div className="flex-1">
                <SimpleDetails
                    property={selectedProperty}
                    onStatusUpdate={onStatusUpdate}
                    pageIdentifier={arrayKey}
                    handleLikeClick={handleLikeClick}
                />
            </div>
        </div>
    );
}

export default MyProperties;

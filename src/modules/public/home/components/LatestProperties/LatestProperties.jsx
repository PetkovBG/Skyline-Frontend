import { useEffect, useState } from 'react';
import { useUserContext } from '../../../../../contexts/UserContext';
import useLikeHandler from '../../../../../hooks/useLikeHandler';
import propertyServiceFactory from '../../../../../services/propertyService';
import Card from '../../../common/Card';
import { Link } from 'react-router-dom';
import { isPropertyInFavorites } from '../../../../../utils/isPropertyInFavorites';

const LatestProperties = ({ section, endpoint }) => {
    const propertyService = propertyServiceFactory();
    const { userData } = useUserContext();
    const { onLikeHandler } = useLikeHandler();

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const getThreeRecentProperties = async () => {
            try {
                const properties =
                    await propertyService.getMostRecentProperties(endpoint);
                setProperties(properties);
            } catch (error) {
                console.log('getMostRecentForSaleError', error);
            }
        };

        getThreeRecentProperties();
    }, []);

    if (properties.length === 0) {
        return (
            <p className="p-4 capitalize container mx-auto rounded-md dark:bg-slate-900 transition-[background] font-bold bg-indigo-50 mb-10">
                No properties {endpoint} available at the moment.
            </p>
        );
    }
    return (
        <div className="mx-auto container pt-10 pb-10">
            <div className="flex flex-row justify-between pb-7">
                <div className="text-left">
                    <h1 className="flex text-3xl font-bold pb-3">
                        {section.title
                            ? section.title
                            : 'Based on your location'}
                    </h1>
                    <p className="font-light pt-2">
                        {section.description
                            ? section.description
                            : 'Some of our picked properties near your location.'}
                    </p>
                </div>

                <div>
                    <Link
                        to={`/${endpoint}`}
                        className="relative top-4 bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-4 px-6 rounded-lg transition-all"
                    >
                        {section.buttonText
                            ? section.buttonText
                            : 'Browse more properties'}
                    </Link>
                </div>
            </div>

            <div className="flex flex-wrap gap-10 justify-between pt-3">
                {properties.length > 0 &&
                    properties.map((property) => (
                        <Card
                            key={property._id}
                            property={property}
                            onLikeHandler={onLikeHandler}
                            specialClass={
                                isPropertyInFavorites(property._id, userData)
                                    ? 'favorite'
                                    : ''
                            }
                        />
                    ))}
            </div>
        </div>
    );
};

export default LatestProperties;

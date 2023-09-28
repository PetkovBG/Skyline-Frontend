import { useEffect } from 'react';
import { useUserContext } from '../../../contexts/UserContext';
import useLikeHandler from '../../../hooks/useLikeHandler';
import Card from './Card';
import { isPropertyInFavorites } from '../../../utils/isPropertyInFavorites';

function Catalog({ properties }) {
    const { onLikeHandler } = useLikeHandler();
    const { userData, fetchUserData } = useUserContext();

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className="container mx-auto grid gap-y-10 grid-cols-3 gap-x-10 justify-items-center mb-10 rounded-md grid-rows-3">
            {properties.map((p) => (
                <Card
                    property={p}
                    key={p._id}
                    onLikeHandler={onLikeHandler}
                    specialClass={
                        isPropertyInFavorites(p._id, userData) ? 'favorite' : ''
                    }
                />
            ))}
        </div>
    );
}

export default Catalog;

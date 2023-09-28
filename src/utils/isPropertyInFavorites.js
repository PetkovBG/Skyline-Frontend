export const isPropertyInFavorites = (propertyId, userData) => {
    return userData?.favorites?.includes(propertyId);
};

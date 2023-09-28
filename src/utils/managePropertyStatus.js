export const displayPropertyStatus = (status) => {
    switch (status) {
        case 'for-rent':
            status = 'Mark as Rented'
            break;
        case 'for-sale':
            status = 'Mark as Sold'
            break;
        case 'rented':
            status = 'Mark for Rent'
            break;
        case 'sold':
            status = 'Mark for Sale';
            break;
    }
    return status;
}

export const switchPropertyStatus = (propertyStatus) => {
    switch (propertyStatus) {
        case 'for-sale':
            propertyStatus = 'sold';
            break;
        case 'for-rent':
            propertyStatus = 'rented'
            break;
        case 'sold':
            propertyStatus = 'for-sale';
            break;
        case 'rented':
            propertyStatus = 'for-rent';
            break;
    }
    return propertyStatus;
}

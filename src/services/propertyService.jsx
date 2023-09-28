import { requestService } from './requester';

const baseURL = 'https://skyline-estate-api.onrender.com/properties';

const propertyServiceFactory = () => {
    const request = requestService();

    const getAll = async (query) => {
            const result = await request.get(`${baseURL}/${query}`);
            const properties = Object.values(result.data);
            return { properties, totalCount: result.totalCount };
    };

    const getOne = async (propertyId) => {
        const result = await request.get(`${baseURL}/${propertyId}`);
        return result.data;
    };

    const create = async (propertyData) => {
        const result = await request.post(`${baseURL}`, propertyData);
        console.log('PROP SERVICE result', result);
        return result;
    };

    const deleteProperty = async (propertyId) => {
        const result = request.delete(`${baseURL}/${propertyId}`);
    };

    const edit = async (propertyId, data) => {
        request.put(`${baseURL}/${propertyId}`, data);
    };

    const like = async (propertyId) => {
        const likeObj = {
            propertyId,
        };
        await request.put('https://skyline-estate-api.onrender.com/users/like', likeObj);
    };

    const getMostRecentProperties = async (endpoint) => {
        const result = await request.get(
            `${baseURL}/recents/?status=${endpoint}`
        );
        return result.data;
    };

    return {
        getAll,
        getOne,
        create,
        delete: deleteProperty,
        edit,
        like,
        getMostRecentProperties,
    };
};

export default propertyServiceFactory;

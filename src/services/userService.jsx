import { requestService } from "./requester";

const baseURL = 'https://skyline-estate-api.onrender.com/users';

const userServiceFactory = () => {

    const request = requestService();

    const getUser = async (userId) => {
        const user = await request.get(`${baseURL}/${userId}`);
        return user;
    }

    return {
        getUser,
    }

}

export default userServiceFactory;
